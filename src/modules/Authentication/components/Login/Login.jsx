import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from './LoginForm.jsx';
import { logInRequest } from '../../redux/actions/login.action';
import Dashboard from './Dashboard.jsx';

const mapStateToProps = state => {
    const { loggedIn } = state.loginModuleReducer;
    return { loggedIn };
};
const mapDispatchToProps = {
    login: logInRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(class Login extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    };

    submit = (values) => {
        const { login } = this.props;
        login(values);
    };
    render() {
        const { loggedIn } = this.props;
        return <>
            <div>
                {loggedIn ? <Dashboard /> : <LoginForm onSubmit={this.submit} />}
            </div>
        </>
    }
});