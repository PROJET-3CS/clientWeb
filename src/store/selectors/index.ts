import { RootState } from '../../helpers/types'
export const getSync = (state: RootState) => state.syncState
export const getAuth = (state: RootState) => state.authState
