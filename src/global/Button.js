import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ type = 'text', children = 'Submit', className = '' }) {
    return (
        <button
            className={`button ${className}`}
            type={type}
        >{children}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string
};

export default Button;
