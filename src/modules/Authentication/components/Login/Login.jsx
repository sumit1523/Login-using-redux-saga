import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm.jsx';

const Login = () => {
    const submit = (values) => {
		console.log(values);
	};
    return (
        <div>
            <LoginForm onSubmit={submit}/>
        </div>
    )
}

Login.propTypes = {
    onSubmit: PropTypes.func
}

export default Login
