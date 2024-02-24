import {combineReducers} from 'redux'

import counterReducer from './Reducer.js'
import userReduces from './userReduces.js'

export default combineReducers({
    counter:counterReducer,
    user:userReduces
})

