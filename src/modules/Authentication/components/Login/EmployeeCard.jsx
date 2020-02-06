import React, { Component } from 'react'
import Empoloyee from '../Login/api/Employee';
import './css/employee.css';
export default class EmployeeCard extends Component {

    employeeDetails = (users) => {
        return users.map(user =>
            <div key={user.id} className="cardItems">
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Email:{user.email}</p>
                <p>PhoneNo.:{user.phoneNo}</p>
            </div>
        )
    }

    render() {
        const users = Empoloyee.user;
        return (
            <div className="card">
                Employee Card
                {users && this.employeeDetails(users)}
            </div>
        )
    }
}
