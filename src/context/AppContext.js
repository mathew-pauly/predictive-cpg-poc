import createDataContext from './createDataContext'
import { fetchQ, submitQ } from '../actions/App'
import { initialState, appReducer } from '../reducers/App'

export const { Context, Provider } = createDataContext(appReducer,
  { fetchQ, submitQ },
  { ...initialState }
)