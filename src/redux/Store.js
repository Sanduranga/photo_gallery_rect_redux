
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { photoReduser } from './photoGallery/photosReduser'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { btnReduser } from './buttons/btnReduser'




const rootReduser = combineReducers({
    photoGallery: photoReduser,
    button: btnReduser,
})

const store = createStore(rootReduser, applyMiddleware(logger, thunk))



export default store