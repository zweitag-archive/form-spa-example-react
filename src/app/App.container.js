import { connect } from 'react-redux';

import App from './App';

function mapStateToProps(state) {
    return {
        page: state.page
    };
}

export default connect(mapStateToProps)(App);
