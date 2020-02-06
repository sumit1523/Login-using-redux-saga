import React, { Component } from 'react'
import Empoloyee from '../Login/api/Employee';

export default class EmployeeCard extends Component {

    employeeDetails = (users) => {
        return users.map(user =>
            <div key={user.id} style={{ border: "1px solid", margin: "5px" }}>
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
            <div>
                Employee Card
                {users && this.employeeDetails(users)}
            </div>
        )
    }
}
