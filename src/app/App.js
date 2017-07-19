import React from 'react';
import PropTypes from 'prop-types';

import Welcome from './Welcome';
import SignUp from '@/signup/SignUp.container';

import './App.scss';

const components = {
    Welcome,
    SignUp,
    NotFound: () => <h1>NOT FOUND</h1>
};

function App({ page }) {
    const Component = components[page];
    return <Component />;
}

App.propTypes = {
    page: PropTypes.string.isRequired,
};

export default App;
