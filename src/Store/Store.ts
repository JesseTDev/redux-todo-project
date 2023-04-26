import { legacy_createStore as createStore} from 'redux'
import { rootReducer } from './Root-Reducer'

export const store = createStore(rootReducer)