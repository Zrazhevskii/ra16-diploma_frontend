import { combineReducers } from 'redux'
import HitsReduser from './HitsReduser'
import catalogReduser from './CatalogReduser'
import CategoriesReduser from './CategoriesReduser'
import searchFormReduser from './searchFormReduser'

const mainReducer = combineReducers({
    addHits: HitsReduser,
    catalog: catalogReduser,
    categories: CategoriesReduser,
    formvalues: searchFormReduser,
})

export default mainReducer