import * as c from './_constants';

export const SET_SIGNUP_STEP = 'signup/SET_SIGNUP_STEP';
export const SET_SIGNUP_EMAIL = 'signup/SET_SIGNUP_EMAIL';
export const SET_FIRST_NAME = 'signup/SET_FIRST_NAME';
export const SET_LAST_NAME = 'signup/SET_LAST_NAME';
export const SET_GENDER = 'signup/SET_GENDER';
export const SET_SSN = 'signup/SET_SSN';
export const SET_SSN_VALIDITY = 'signup/SET_SSN_VALIDITY';
export const SET_ADDRESS = 'signup/SET_ADDRESS';
export const SET_LOADING_STATE = 'signup/SET_LOADING_STATE';

const initialState = {
    isLoading: false,
    isSsnValid: false,
    signupStep: c.ENTER_EMAIL,
    signupEmail: '',
    firstName: '',
    lastName: '',
    gender: 'other',
    ssn: '',
    address: {
        name: '',
        bic: '',
    },
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_SIGNUP_STEP:
        case SET_SIGNUP_EMAIL:
        case SET_FIRST_NAME:
        case SET_LAST_NAME:
        case SET_GENDER:
        case SET_SSN:
        case SET_SSN_VALIDITY:
        case SET_ADDRESS:
        case SET_LOADING_STATE:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
}
