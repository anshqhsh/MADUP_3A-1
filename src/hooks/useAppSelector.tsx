import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../redux'

// instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
