import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form'

// const mapStateToProps = state => ({
//     // prop: state.reducer.prop
// });

// const mapDispatchToProps = {
//     // prop: action
// };

class LoginForm extends Component {
    state = {
        // put initial state here
    };

    componentDidMount() {
        //put code that needs to execute once on component mounting
    }

    componentDidUpdate(prevProps) {
        if (this.propsDidChange(prevProps)) {
            //put code that needs to execute when the props of the component have updated
        }
    }

    propsDidChange(prevProps) {
        //check if the necessary props have actually updated
    }

    static propTypes = {
        //check types of props
        name: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
    };

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        </Fragment>
    }
};

export default reduxForm({
    form: 'loginForm',
    destroyOnUnmount: false,
})(connect(null, null)(LoginForm));