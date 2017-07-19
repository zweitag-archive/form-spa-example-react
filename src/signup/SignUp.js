import React from 'react';
import PropTypes from 'prop-types';

import * as c from './_constants';
import EnterEmail from '@/signup/EnterEmail.container';
import EnterPersonalData from '@/signup/EnterPersonalData.container';
import EnterSsn from '@/signup/EnterSsn.container';
import Confirm from '@/signup/Confirm.container';

function SignUp({ signupStep }) {
    switch (signupStep) {
        case c.ENTER_EMAIL:
            return <EnterEmail />;
        case c.ENTER_PERSONAL_DATA:
            return <EnterPersonalData />;
        case c.ENTER_SSN:
            return <EnterSsn />;
        case c.CONFIRM_ALL:
            return <Confirm />;
        default:
            return <div>NOT FOUND</div>;
    }
}

SignUp.propTypes = {
    signupStep: PropTypes.string.isRequired
}

export default SignUp;
