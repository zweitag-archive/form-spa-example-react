import { connect } from 'react-redux';

import * as actions from './_actions';
import EnterEmail from './EnterEmail';

function mapStateToProps(state) {
    return {
        signupEmail: state.signup.signupEmail,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeEmail(event) {
            const email = event.target.value;
            dispatch(actions.setSignupEmail(email));
        },
        onSubmit() {
            dispatch(actions.confirmSignupEmail());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterEmail);
