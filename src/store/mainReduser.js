import { combineReducers } from 'redux'
import HitsReduser from './HitsReduser'
import catalogReduser from './CatalogReduser'
import CategoriesReduser from './CategoriesReduser'

const mainReducer = combineReducers({
    addHits: HitsReduser,
    catalog: catalogReduser,
    categories: CategoriesReduser,
})

export default mainReducer