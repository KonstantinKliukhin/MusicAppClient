import { AppStore } from '../store'
import { useDispatch } from 'react-redux'

export type AppDispatch = AppStore['dispatch']
const useAppDispatch: () => AppDispatch = useDispatch
