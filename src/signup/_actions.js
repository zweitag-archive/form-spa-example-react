import * as t from './_reducer';
import * as c from './_constants';

const API_URL = process.env.REACT_APP_API_URL;

// API ACTIONS
export function confirmSsn() {
    return async (dispatch, getState) => {
        dispatch(setLoadingState(true));
        const ssn = getState().signup.ssn;
        const body = JSON.stringify({ ssn });

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        const json = await response.json();
        if (!json.error) {
            dispatch(setAddress(json));
            dispatch(setSsnValidity(true));
        }
        dispatch(setLoadingState(false));
    };
}

// OTHER SETTERS
export function setSsnValidity(isSsnValid = false) {
    return {
        type: t.SET_SSN_VALIDITY,
        payload: { isSsnValid },
    };
}
function setAddress(address) {
    return {
        type: t.SET_ADDRESS,
        payload: { address },
    };
}

function setLoadingState(isLoading) {
    return {
        type: t.SET_LOADING_STATE,
        payload: { isLoading },
    };
}

// NAVIGATE THROUGH STEPS
export function startSignup() {
    return {
        type: t.SET_SIGNUP_STEP,
        payload: { signupStep: c.ENTER_EMAIL },
    };
}
export function confirmSignupEmail() {
    return {
        type: t.SET_SIGNUP_STEP,
        payload: { signupStep: c.ENTER_PERSONAL_DATA },
    };
}
export function confirmPersonalData() {
    return {
        type: t.SET_SIGNUP_STEP,
        payload: { signupStep: c.ENTER_SSN },
    };
}
export function confirmAddress() {
    return {
        type: t.SET_SIGNUP_STEP,
        payload: { signupStep: c.CONFIRM_ALL },
    };
}

// FORM HANDLERS
export function setSignupEmail(signupEmail) {
    return {
        type: t.SET_SIGNUP_EMAIL,
        payload: { signupEmail },
    };
}
export function setFirstName(firstName) {
    return {
        type: t.SET_FIRST_NAME,
        payload: { firstName },
    };
}
export function setLastName(lastName) {
    return {
        type: t.SET_LAST_NAME,
        payload: { lastName },
    };
}
export function setGender(gender) {
    return {
        type: t.SET_GENDER,
        payload: { gender },
    };
}
export function setSsn(ssn) {
    return {
        type: t.SET_SSN,
        payload: { ssn },
    };
}
