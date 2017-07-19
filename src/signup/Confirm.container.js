import { connect } from 'react-redux';

import Confirm from './Confirm';

function mapStateToProps(state) {
    return {
        signupEmail: state.signup.signupEmail,
        firstName: state.signup.firstName,
        lastName: state.signup.lastName,
        gender: state.signup.gender,
        ssn: state.signup.ssn,
        address: state.signup.address,
    }
}

export default connect(mapStateToProps)(Confirm);
