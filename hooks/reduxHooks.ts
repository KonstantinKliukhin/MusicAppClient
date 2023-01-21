import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { AppDispatch, RootState } from "../store";
import actions from "../store/actionCreators";

export const useAppDispatch: () => AppDispatch = useDispatch

const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useActions
