import React from 'react';
import Link from 'redux-first-router-link';

import { SIGN_UP } from '@/_router/routes';

import '@/global/Button.scss';

function Start() {
    return (
        <Link className="button" to={{ type: SIGN_UP }}>Sign up</Link>
    );
}

export default Start;
