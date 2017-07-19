import React from 'react';
import PropTypes from 'prop-types';

import Input from '@/global/Input';
import Button from '@/global/Button';
import SignupForm from './SignupForm';

import './EnterSsn.scss';

function EnterAddress({ isSsnValid = false, ssn = '', address, onChangeSsn, onSubmit }) {
    return (
        <SignupForm onSubmit={onSubmit} preventDefault={true}>
            <p>Please enter your social security number:</p>
            <Input
                value={ssn}
                onChange={onChangeSsn}
                placeholder="12 3456 7890 1234 5678 12"
                label="SSN:"
            />
            {ssn && !isSsnValid && <Button type="submit">Use SSN</Button>}
            {isSsnValid &&
                <div className="address-info">
                    <div><strong>Street:</strong>{address.street}</div>
                    <div><strong>City:</strong>{address.city}</div>
                    <Button className="address-info__button" type="submit">Submit</Button>
                </div>
            }
        </SignupForm>
    );
}

EnterAddress.propTypes = {
    isSsnValid: PropTypes.bool,
    ssn: PropTypes.string,
    address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
    }),
    onChangeSsn: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default EnterAddress;
