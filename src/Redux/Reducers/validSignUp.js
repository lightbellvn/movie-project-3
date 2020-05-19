import * as actionTypes from '../Constants/ActionTypes'
var initialState = {
    username: "",
    email: "",
    firtLastName: "",
    password: "",
    rePassword: "",
    usernameValid: null,
    emailValid: null,
    firtLastNameValid: null,
    passwordValid: null,
    rePasswordValid: null,
    totalValid: null,
}

var validSignUp = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_VALIDATION:
            
            state = action.formValid
           
            return { ...state }

        default:
            return { ...state }
    }
}



export default validSignUp