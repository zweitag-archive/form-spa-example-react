import { NOT_FOUND } from 'redux-first-router';
export const WELCOME = 'router/WELCOME';
export const SIGN_UP =  'router/SIGN_UP';

const routes = {
    [WELCOME]: {
        path: '/',
        component: 'Welcome'
    },
    [SIGN_UP]: {
        path: '/signup',
        component: 'SignUp'
    },
    [NOT_FOUND]: {
        component: 'NotFound'
    }
}

export default routes;
