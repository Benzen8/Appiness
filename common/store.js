import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { persistReducer, persistStore, } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import login from '../screens/login/reducers'

const rootReducer = combineReducers({
login:login
})

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: hardSet
}

const store = createStore(
    persistReducer(rootPersistConfig, rootReducer),
    compose(applyMiddleware(thunk, logger))
)

const persistor = persistStore(store)

export { store, persistor }