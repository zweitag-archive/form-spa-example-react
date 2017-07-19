import React from 'react';
import PropTypes from 'prop-types';

function Confirm({ signupEmail, firstName, lastName, gender, ssn, address }) {
    return (
        <div className="signup-form">
            <p>This is your data:</p>
            <div><strong>Email:</strong> {signupEmail}</div>
            <div><strong>Name:</strong> {firstName} {lastName}</div>
            <div><strong>Gender:</strong> {gender}</div>
            <div><strong>SSN:</strong> {ssn}</div>
            <div><strong>Street:</strong> {address.street}</div>
            <div><strong>City:</strong> {address.city}</div>
        </div>
    );
}

Confirm.propTypes = {
    signupEmail: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    ssn: PropTypes.string,
    address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
    }),
};


export default Confirm;
