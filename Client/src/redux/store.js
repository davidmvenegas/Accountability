import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';
import NavigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    navigation: NavigationReducer,
});

export const store = createStore(rootReducer);