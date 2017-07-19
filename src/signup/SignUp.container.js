import { connect } from 'react-redux';

import SignUp from './SignUp';

function mapStateToProps(state) {
    return {
        signupStep: state.signup.signupStep
    };
}

export default connect(mapStateToProps)(SignUp);
