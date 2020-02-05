import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Empoloyee from '../../api/Empoloyee.json';

export default class EmployeeCard extends Component {
    state = {
        users: [
            {
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",
                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
        ]
    }

    // static propTypes = {
    //     prop: PropTypes
    // }
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
        const { users } = this.state;
        console.log(this.state.users)
        return (
            <div>
                Employee Card
                {users && this.employeeDetails(users)}
            </div>
        )
    }
}
