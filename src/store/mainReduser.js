import { combineReducers } from 'redux'
import HitsReduser from './HitsReduser'
import catalogReduser from './CatalogReduser'

const mainReducer = combineReducers({
    addHits: HitsReduser,
    catalog: catalogReduser
})

export default mainReducer