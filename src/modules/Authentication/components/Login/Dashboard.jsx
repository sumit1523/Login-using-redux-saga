import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOutRequest } from '../../redux/actions/login.action';
import EmployeeCard from './EmployeeCard.jsx';

const mapDispatchToProps = {
    logOutRequest
};

export default connect(null, mapDispatchToProps)(class Dashboard extends Component {
    static propTypes = {
        logInRequestFailure: PropTypes.func
    };
    render() {
        const { logOutRequest } = this.props;
        return <>
            <article>
                <section className='text-section'>
                    <div>
                        <button id="logout_button" onClick={logOutRequest}>Logout</button>
                    </div>
                    <h1>Employee Dashboard</h1>
                    <p>Welcome, you are logged in!</p>
                    <EmployeeCard />
                </section>
            </article>
        </>
    }
});
