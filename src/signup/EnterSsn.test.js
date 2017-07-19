import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
let store;

import EnterSsn from './EnterSsn';

describe('EnterSsn', () => {
    it('should render ', () => {
        const onSubmit = jest.fn();
        const onChangeSsn = jest.fn();
        const shallowEl = shallow(<EnterSsn onSubmit={onSubmit} onChangeSsn={onChangeSsn} />);
    });
    it('should not show a submit button when no ssn is given', () => {
        const onSubmit = jest.fn();
        const onChangeSsn = jest.fn();
        const shallowEl = shallow(<EnterSsn onSubmit={onSubmit} onChangeSsn={onChangeSsn} />);

        expect(shallowEl.find('Button')).toHaveLength(0);
        shallowEl.setProps({ ssn: 'test' });
        expect(shallowEl.find('Button')).toHaveLength(1);
        shallowEl.setProps({ ssn: '' });
        expect(shallowEl.find('Button')).toHaveLength(0);
    });
    it('should only show the second button when the ssn is valid', () => {
        const onSubmit = jest.fn();
        const onChangeSsn = jest.fn();
        const shallowEl = shallow(<EnterSsn onSubmit={onSubmit} onChangeSsn={onChangeSsn} />);

        expect(shallowEl.find('Button')).toHaveLength(0);
        shallowEl.setProps({ ssn: 'test' });
        expect(shallowEl.find('Button')).toHaveLength(1);
        expect(shallowEl.find('Button').html()).toContain('Use SSN');
        shallowEl.setProps({ ssn: 'test', isSsnValid: true, address: {}});
        expect(shallowEl.find('Button')).toHaveLength(1);
        expect(shallowEl.find('Button').html()).toContain('Submit');
    });
    it('should display the bank information if the ssn is valid', () => {
        const onSubmit = jest.fn();
        const onChangeSsn = jest.fn();
        const shallowEl = shallow(<EnterSsn onSubmit={onSubmit} onChangeSsn={onChangeSsn} />);
        expect(shallowEl.find('.address-info')).toHaveLength(0);
        shallowEl.setProps({ ssn: 'test', isSsnValid: true, address: { street: 'testStreet', city: 'test' }});
        expect(shallowEl.find('.address-info')).toHaveLength(1);
    });
    it('should submit the form to submit the ssn', () => {
        const onSubmit = jest.fn();
        const onChangeSsn = jest.fn();
        const ssn = 'test';
        const shallowEl = shallow(<EnterSsn onSubmit={onSubmit} onChangeSsn={onChangeSsn} ssn={ssn} />);

        const form = shallowEl.find('SignupForm');
        expect(form).toHaveLength(1);
        form.simulate('submit');

        expect(onSubmit.mock.calls).toHaveLength(1);
    });
    it('should submit the form to confirm the address', () => {
        const onSubmit = jest.fn();
        const onChangeSsn = jest.fn();
        const ssn = 'test';
        const isSsnValid = true;
        const address = {};

        const shallowEl = shallow(<EnterSsn onSubmit={onSubmit} onChangeSsn={onChangeSsn} ssn={ssn} isSsnValid={isSsnValid} address={address} />);

        const form = shallowEl.find('SignupForm');
        expect(form).toHaveLength(1);
        form.simulate('submit');

        expect(onSubmit.mock.calls).toHaveLength(1);
    });
});
