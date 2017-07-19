import { connect } from 'react-redux';

import * as actions from './_actions';
import EnterPersonalData from './EnterPersonalData';

function mapStateToProps(state) {
    return {
        firstName: state.signup.firstName,
        lastName: state.signup.lastName,
        gender: state.signup.gender,
        genderOptions: [{
            name: 'male',
            displayName: 'Male',
        }, {
            name: 'female',
            displayName: 'Female',
        }, {
            name: 'other',
            displayName: 'Other',
        }],
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeFirstName(event) {
            const firstName = event.target.value;
            dispatch(actions.setFirstName(firstName));
        },
        onChangeLastName(event) {
            const lastName = event.target.value;
            dispatch(actions.setLastName(lastName));
        },
        onChangeGender(event) {
            const gender = event.target.value;
            dispatch(actions.setGender(gender));
        },
        onSubmit(event) {
            event.preventDefault();
            dispatch(actions.confirmPersonalData());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterPersonalData);
