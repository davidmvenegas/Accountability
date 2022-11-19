import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';
import NavigationReducer from './reducers/navigationReducer';
//import SupervisorReducer from './reducers/supervisorReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    navigation: NavigationReducer,
 //   supervisor : SupervisorReducer,
});

export const store = createStore(rootReducer);