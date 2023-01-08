import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../reducers'
import { AnyAction } from 'redux'

export type ThunkDispatchType = ThunkDispatch<RootState, void, AnyAction>
