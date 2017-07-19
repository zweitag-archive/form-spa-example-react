import * as types from './_reducer';
import * as actions from './_actions';
import * as constants from './_constants';

describe('Signup Actions', () => {
    describe('Async Actions', () => {
        const address = { name: 'Test bank', bic: 'test bic' };
        beforeEach(() => {
            const response = { json: () => address};
            global.fetch = jest.fn().mockImplementation(() => {
                return new Promise(resolve => resolve(response));
            });
        });
        it('should send a request to gather the bank data', async () => {
            const signupState = { signup: { ssn: 'testSsn' }};
            const dispatch = jest.fn();
            const getState = jest.fn().mockImplementation(() => signupState);
            const action = await actions.confirmSsn()(dispatch, getState);
            expect(global.fetch.mock.calls).toHaveLength(1);
            expect(global.fetch.mock.calls[0][1]).toHaveProperty('body', JSON.stringify(signupState.signup));
            expect(dispatch.mock.calls).toHaveLength(2);
            expect(dispatch.mock.calls[0][0]).toHaveProperty('type', types.SET_ADDRESS);
            expect(dispatch.mock.calls[0][0].payload).toHaveProperty('address', address);
            expect(dispatch.mock.calls[1][0]).toHaveProperty('type', types.SET_SSN_VALIDITY);
            expect(dispatch.mock.calls[1][0].payload).toHaveProperty('isSsnValid', true);
        });
    });
    describe('Other Actions', () => {
        it('should update the SSN validity', () => {
            const action1 = actions.setSsnValidity(true);
            const action2 = actions.setSsnValidity(false);
            const action3 = actions.setSsnValidity();

            expect(action1).toHaveProperty('type', types.SET_SSN_VALIDITY);
            expect(action2).toHaveProperty('type', types.SET_SSN_VALIDITY);
            expect(action3).toHaveProperty('type', types.SET_SSN_VALIDITY);
            expect(action1.payload).toHaveProperty('isSsnValid', true);
            expect(action2.payload).toHaveProperty('isSsnValid', false);
            expect(action3.payload).toHaveProperty('isSsnValid', false);
        });
    });
    describe('Navigation', () => {
        it('should start the signup correctly', () => {
            const action = actions.startSignup();

            expect(action).toHaveProperty('type', types.SET_SIGNUP_STEP);
            expect(action.payload).toHaveProperty('signupStep', constants.ENTER_EMAIL);
        });
        it('should go to personal data after confirming the email', () => {
            const action = actions.confirmSignupEmail();

            expect(action).toHaveProperty('type', types.SET_SIGNUP_STEP);
            expect(action.payload).toHaveProperty('signupStep', constants.ENTER_PERSONAL_DATA);
        });
        it('should go to bank data after confirming the personal data', () => {
            const action = actions.confirmPersonalData();

            expect(action).toHaveProperty('type', types.SET_SIGNUP_STEP);
            expect(action.payload).toHaveProperty('signupStep', constants.ENTER_SSN);
        });
        it('should go to the confirmation screen after confirming the bank data', () => {
            const action = actions.confirmAddress();

            expect(action).toHaveProperty('type', types.SET_SIGNUP_STEP);
            expect(action.payload).toHaveProperty('signupStep', constants.CONFIRM_ALL);
        });
    });
    describe('Form Handlers', () => {
        it('should set the signup email', () => {
            const action = actions.setSignupEmail('test');

            expect(action).toHaveProperty('type', types.SET_SIGNUP_EMAIL);
            expect(action.payload).toHaveProperty('signupEmail', 'test');
        });
        it('should set the first name', () => {
            const action = actions.setFirstName('test');

            expect(action).toHaveProperty('type', types.SET_FIRST_NAME);
            expect(action.payload).toHaveProperty('firstName', 'test');
        });
        it('should set the last name', () => {
            const action = actions.setLastName('test');

            expect(action).toHaveProperty('type', types.SET_LAST_NAME);
            expect(action.payload).toHaveProperty('lastName', 'test');
        });
        it('should set the gender', () => {
            const action = actions.setGender('test');

            expect(action).toHaveProperty('type', types.SET_GENDER);
            expect(action.payload).toHaveProperty('gender', 'test');
        });
        it('should set the ssn', () => {
            const action = actions.setSsn('test');

            expect(action).toHaveProperty('type', types.SET_SSN);
            expect(action.payload).toHaveProperty('ssn', 'test');
        });
    });
});
