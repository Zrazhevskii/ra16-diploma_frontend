import { combineReducers } from 'redux'
import HitsReduser from './HitsReduser'
import catalogReduser from './CatalogReduser'
import CategoriesReduser from './CategoriesReduser'
import searchFormReduser from './searchFormReduser'
import cardItemReduser from './CardItemReduser'
import activeCategoriesReduser from './ActiveCategories'
import BooleanReduser from './BooleanReduser'

const mainReducer = combineReducers({
    addHits: HitsReduser,
    catalog: catalogReduser,
    categories: CategoriesReduser,
    formvalues: searchFormReduser,
    card: cardItemReduser,
    activeCategories: activeCategoriesReduser,
    bool: BooleanReduser,
})

export default mainReducer