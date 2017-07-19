import React from 'react';
import PropTypes from 'prop-types';

import Input from '@/global/Input';
import Select from '@/global/Select';
import Button from '@/global/Button';
import SignupForm from './SignupForm';

function EnterPersonalData({ firstName, lastName, gender, genderOptions, onChangeFirstName, onChangeLastName, onChangeGender, onSubmit }) {
    return (
        <SignupForm onSubmit={onSubmit} preventDefault={true}>
            <p>Please enter your personal data:</p>
            <Input
                value={firstName}
                placeholder="John"
                label="First Name"
                onChange={onChangeFirstName}
            />
            <Input
                value={lastName}
                placeholder="Smith"
                label="Last Name"
                onChange={onChangeLastName}
            />
            <Select
                value={gender}
                options={genderOptions}
                onChange={onChangeGender}
                label="Gender"
             />
            <Button type="submit">Submit</Button>
        </SignupForm>
    );
}

EnterPersonalData.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    genderOptions: PropTypes.arrayOf(PropTypes.object),
    onChangeFirstName: PropTypes.func,
    onChangeLastName: PropTypes.func,
    onChangeGender: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default EnterPersonalData;
