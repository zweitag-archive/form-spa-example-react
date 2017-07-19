import React from 'react';
import PropTypes from 'prop-types';

import './SignupForm.scss';

function SignupForm({ children, onSubmit, preventDefault = true }) {
    function onInternalSubmit(event) {
        preventDefault && event.preventDefault();
        onSubmit(event);
    }
    return (
        <form className="signup-form" onSubmit={onInternalSubmit}>
            {children}
        </form>
    )
}

SignupForm.propTypes = {
    preventDefault: PropTypes.bool,
    children: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default SignupForm;
