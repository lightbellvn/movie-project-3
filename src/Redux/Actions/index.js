import * as actionTypes from './../Constants/ActionTypes';


export const actUserSignUp = (keyUser, valueUser) =>{
    return {
        type : actionTypes.USER_SIGN_UP,
        keyUser,
        valueUser,
    }

}

export const actErrorValidation = (formValid)=>{
    return {
        type : actionTypes.SIGN_UP_VALIDATION,
        formValid
        
    }
}

export const actResetFormSignUp = ()=>{
    return {
        type : actionTypes.RESET_FORM_SIGN_UP
    }
}