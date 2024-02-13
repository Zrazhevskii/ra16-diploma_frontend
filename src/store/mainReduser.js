import { combineReducers } from 'redux'
import { HitsReduser } from './HitsReduser'

const mainReducer = combineReducers({
    addHits: HitsReduser,
})

export default mainReducer