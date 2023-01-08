import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionsCreator from '../store/actions-creators'

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionsCreator, dispatch)
}

export default useActions
