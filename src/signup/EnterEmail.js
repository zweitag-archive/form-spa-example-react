import React from 'react';
import PropTypes from 'prop-types';

import Input from '@/global/Input';
import Button from '@/global/Button';
import SignupForm from './SignupForm';

function EnterEmail({ signupEmail, onSubmit, onChangeEmail }) {
    return (
        <SignupForm onSubmit={onSubmit} preventDefault={true}>
            <p>Please enter your email:</p>
            <Input
                value={signupEmail}
                onChange={onChangeEmail}
                placeholder="your@email.com"
                label="Your Email:"
            />
            <Button type="submit">Submit</Button>
        </SignupForm>
    );
}

EnterEmail.propTypes = {
    signupEmail: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
};

export default EnterEmail;
