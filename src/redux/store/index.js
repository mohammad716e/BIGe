import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import reducers from './../reducers';
import {persistReducer, persistStore} from "redux-persist";
import {AsyncStorage} from 'react-native';

const middleware = [];
middleware.push(thunk);
middleware.push(createLogger());

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(...middleware),
    )
);
persistStore(store, {storage: AsyncStorage});
export default store;