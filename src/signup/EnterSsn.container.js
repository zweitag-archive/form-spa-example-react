import { connect } from 'react-redux';

import * as actions from './_actions';
import EnterSsn from './EnterSsn';

function mapStateToProps(state) {
    return {
        isSsnValid: state.signup.isSsnValid,
        ssn: state.signup.ssn,
        address: state.signup.address,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeSsn(event) {
            const ssn = event.target.value;
            dispatch(actions.setSsn(ssn));
            dispatch(actions.setSsnValidity(false));
        },
        onConfirmSsn() { // only available to mergeProps
            dispatch(actions.confirmSsn());
        },
        onConfirmAddress() { // only available to mergeProps
            dispatch(actions.confirmAddress());
        }
    };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    function onSubmit() {
        if (stateProps.ssn && stateProps.isSsnValid) {
            dispatchProps.onConfirmAddress();
        } else {
            dispatchProps.onConfirmSsn();
        }
    }
    const updatedDispatchProps = { onChangeSsn: dispatchProps.onChangeSsn, onSubmit };

    return Object.assign({}, ownProps, stateProps, updatedDispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EnterSsn);
