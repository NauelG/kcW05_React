import { createStore, combineReducers, compose } from 'redux';

const loginReducer = (login = false, action) => {
    switch(action){
        case 'LOGIN':
            return login = true;
        case 'LOGOUT':
            return login = false;
        default:
            return login;
    }
}

const rootReducer = combineReducers({
    login: loginReducer
})

const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, enhance());



export default store;