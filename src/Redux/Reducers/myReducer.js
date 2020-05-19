import { combineReducers  } from 'redux';
import userSignUp from './userSignUp'
import validSignUp from './validSignUp'

var myReducer = combineReducers ({
    userSignUp,
    validSignUp,
    
});

export default myReducer;