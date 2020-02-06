import React from 'react';
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form'
import { required, email, maxLengthP } from './loginValidation.js';
import './css/login.css';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div >
            <input {...input} placeholder={label} type={type} className="input_style" />
            {touched &&
                ((error && <span>{error}</span>))}
        </div>
    </div>
)
const LoginForm = ({ handleSubmit }) => {
    return <>
        <form onSubmit={handleSubmit} >
            <div className="login_div">
                <div>
                    <Field
                        name="email"
                        label="Email"
                        component={renderField}
                        type="email"
                        validate={[required, email]}
                    />
                </div>
                <div>
                    <Field
                        name="password"
                        label="Password"
                        component={renderField}
                        type="password"
                        validate={[required, maxLengthP]}
                    />
                </div>
                <div>
                    <button id="login_button" type="submit"> Submit </button>
                </div>
            </div>
        </form>
    </>
};
LoginForm.propTypes = {
    //check types of props
    name: PropTypes.string,
    label: PropTypes.string,
};
export default reduxForm({
    form: 'loginForm',
})(LoginForm);