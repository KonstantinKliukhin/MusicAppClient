import { useCallback, useEffect, useState } from 'react'
import { isEqual } from 'lodash'
import { HTTP_METHODS_TYPE } from '../types/common/HttpMethods'
import { FETCHING_DATA_STATE } from '../types/common/FetchingDataState'


const useHttp = <RequestFn extends (...args: any[]) => Promise<any>, ParseResultFn extends (data: Awaited<ReturnType<RequestFn>>) => any>(
  callback: RequestFn,
  settings: {
    method: HTTP_METHODS_TYPE;
    args?: Parameters<RequestFn> | null;
    parseResultFn?: ParseResultFn;
    afterRequestCallback?: () => void;
    onError?: (e?: Error) => void;
  } = { method: HTTP_METHODS_TYPE.GET },
): {
  fetchingDataState: FETCHING_DATA_STATE,
  error: Error | null;
  request: (...args: Parameters<RequestFn>) => Promise<void>;
  clearError: () => void;
  clearSuccess: () => void;
  data: (typeof settings.parseResultFn extends undefined ? Awaited<ReturnType<RequestFn>> : ReturnType<ParseResultFn>) | null;
} => {
  const [fetchingDataState, setFetchingDataState] = useState<FETCHING_DATA_STATE>(FETCHING_DATA_STATE.IDLE)
  const [error, setError] = useState<Error | null>(null)
  const [lastArgs, setLastArgs] = useState<Parameters<RequestFn> | null | undefined>(settings.args)
  const [data, setData] = useState<
    (typeof settings.parseResultFn extends undefined ? Awaited<ReturnType<RequestFn>> : ReturnType<ParseResultFn>) | null
  >(null)

  useEffect(() => {
    if (!isEqual(settings.args, lastArgs)) {
      setLastArgs(settings.args)
    }
  }, [settings.args])

  const handleLoading = () => {
    setError(null)
    setFetchingDataState(FETCHING_DATA_STATE.LOADING)
  }

  const handleError = (e: unknown) => {
    if (e instanceof Error) {
      console.error(e)
      setFetchingDataState(FETCHING_DATA_STATE.ERROR)
      setError(e)

      if (settings.onError) {
        settings.onError(e)
      }
    }
  }

  const handleSuccess = () => {
    setFetchingDataState(FETCHING_DATA_STATE.SUCCESS)
    if (settings.afterRequestCallback) {
      settings.afterRequestCallback()
    }
  }

  useEffect(
    function get() {
      if (settings.method === HTTP_METHODS_TYPE.GET && lastArgs !== null && fetchingDataState !== FETCHING_DATA_STATE.LOADING && data === null) {
        handleLoading()

        const argsToRequest = lastArgs === undefined ? [] : lastArgs

        callback(...argsToRequest)
          .then(res => {
            handleSuccess()
            if (!settings?.parseResultFn) {
              setData(res?.data)
              return
            }

            const newData = settings.parseResultFn(res?.data)
            setData(newData)
          })
          .catch(e => {
            handleError(e)
          })
      }
    },
    [lastArgs],
  )

  const request = useCallback(
    async (...args: Parameters<RequestFn>) => {
      handleLoading()
      try {
        const response = await callback(...args)

        handleSuccess()
        if (!settings.parseResultFn) {
          setData(response?.data)
          return
        }

        const newData = settings.parseResultFn(response?.data)
        setData(newData)

        return newData
      } catch (e) {
        handleError(e)
      }
    },
    [settings.afterRequestCallback, settings.onError],
  )

  const clearError = useCallback(() => {
    setError(null)
    if (fetchingDataState === FETCHING_DATA_STATE.ERROR) {
      setFetchingDataState(FETCHING_DATA_STATE.SUCCESS);
    }
  }, [fetchingDataState])

  const clearSuccess = useCallback(() => {
    setFetchingDataState(FETCHING_DATA_STATE.IDLE);
  }, [])

  return { request, clearError, fetchingDataState, error, data, clearSuccess }
}

export default useHttp
