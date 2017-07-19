import React from 'react';
import PropTypes from 'prop-types';

import getNextId from '@/_helpers/getNextId';

import './Input.scss';

function Input({ value, type = 'text', placeholder = '', label, onChange }) {
    const uniqueId = getNextId();

    return (
        <div className="input-wrapper">
            {label && <label className="input-wrapper__label" htmlFor={`input-${uniqueId}`}>{label}</label>}
            <input
                className="input-wrapper__input"
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                id={uniqueId}
            />
        </div>
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;
