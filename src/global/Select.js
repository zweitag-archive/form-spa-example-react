import React from 'react';
import PropTypes from 'prop-types';

import getNextId from '@/_helpers/getNextId';

import './Select.scss';

function Input({ value, options, placeholder = '', label, onChange }) {
    const uniqueId = getNextId();

    return (
        <div className="select-wrapper">
            {label && <label className="select-wrapper__label" htmlFor={`input-${uniqueId}`}>{label}</label>}
            <select className="select-wrapper__select" value={value} onChange={onChange}>
                {options.map((option, i) => (
                    <option value={option.name} key={i}>
                        {option.displayName}
                    </option>
                ))}
            </select>
        </div>
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;
