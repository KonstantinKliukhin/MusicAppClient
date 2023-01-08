import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducers'

export type ThunkActionType<ActionType extends Action<string>> = ActionCreator<
  ThunkAction<Promise<void>, RootState, void, ActionType>
>
