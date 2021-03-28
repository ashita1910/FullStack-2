import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Table} from "react-bootstrap";

export default function DynamicTable() {
    const [user, setUser] = useState([
        {username:"abc",password:"abc123",email:"abc@gmail.com"},
        {username:"xyz",password:"xyz123456",email:"xyz@gmail.com"},
        {username:"user",password:"user",email:"user@gmail.com"}
    ]);
    const addUser = (e) => {
        //e.preventDefault();
        const userEl = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
        };
        setUser([...user, userEl]);
        // e.target.username.value=""
        // e.target.password.value=""
        // e.target.email.value=""
    }
    const displayUser = (user, index) => {
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
            </tr>
        );
    };
    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-4">React Dynamic Table</h1>
            <form class="form-inline mt-4 mb-4 justify-content-center" onSubmit={addUser}>
            <div class="form-row align-items-center">
                <div class="col-sm-3 my-1">
                    <div class="input-group">
                    <label for="inlineFormInputGroupUsername" class="mr-2 mt-1">UserName</label>
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                        </input>
                    </div>
                </div>
                <div class="col-sm-3 my-1">
                    <div class="input-group">
                    <label for="inlineFormInputGroupPassword" class="mr-2 mt-1">Password</label>
                        <input type="password" class="form-control" id="inlineFormInputGroupPassword">
                        </input>
                    </div>
                </div>
                <div class="col-sm-3 my-1">
                    <div class="input-group">
                    <label for="inlineFormInputGroupEmail" class="mr-2 mt-1">Email Id:</label>
                        <input type="email" class="form-control" id="inlineFormInputGroupEmail">
                        </input>
                    </div>
                </div>
                <div class="col-auto my-1">
                    <button type="submit" class={"btn btn-primary"}>Submit</button>
                </div>
            </div>
            </form>
            <Table hover className="text-center">
                <thead className="bg-warning">
                    <tr>
                    <th>SNo.</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(displayUser)}
                </tbody>
            </Table>
            </div>
    );
}