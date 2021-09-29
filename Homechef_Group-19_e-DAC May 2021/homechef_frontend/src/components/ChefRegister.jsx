import React, { useEffect, useState } from "react";
import React, { Component } from 'react'
import ChefService from '../services/ChefService'
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import PropTypes from "prop-types";
// import StatusMessage from "../../Helpers/StatusMessage";
import { Link } from "react-router-dom";

class RegisterChef extends Component{
    constructor(props) {
        super(props)

        this.state = {
                chefs: []
        }       
        this.addChef = this.addChef.bind(this);
    }
        componentDidMount(){
            ChefService.getChefs().then((res) => {
                this.setState({ chefs: res.data});
            });
        }

        addChef(){
            this.props.history.push('/add-chef/_add');
        }



}
// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// export const ChefRegister = () => {
//     return (
//         <Form>
//       <FormGroup>
//         <Label for="firstname">First Name</Label>
//         <Input type="text" name="firstname" id="firstname" placeholder="Enter Your First Name Here" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="lastname">Last Name</Label>
//         <Input type="text" name="lastname" id="lastname" placeholder="Enter Your Last Name Here" />
//       </FormGroup>      
//       <FormGroup>
//         <Label for="address">Address</Label>
//         <Input type="text" name="address" id="address" placeholder="Enter Your Address Here" />
//       </FormGroup>      
//       <FormGroup>
//         <Label for="email">Email Id</Label>
//         <Input type="email" name="email" id="email" placeholder="Enter Your Email Id Here" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="password">Password</Label>
//         <Input type="password" name="password" id="password" placeholder="Enter Your Password Here" />
//       </FormGroup>
//       <FormGroup tag="fieldset">
//         <Label>Gender</Label>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="gender" id="male"/>{' '}Male
//           </Label>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="gender" id="female" />{' '}Female
//           </Label>
//         </FormGroup>
//       </FormGroup>
//       <FormGroup>
//         <Label for="contactnumber">Contact Number</Label>
//         <Input type="text" name="contactnumber" id="contactnumber" placeholder="Enter Your Contact Number Here" />
//       </FormGroup>      

//       <FormGroup>
//         <Label for="city">City</Label>
//         <Input type="select" name="select" id="city">
//           <option defaultValue>Select City</option>
//           <option>Pune</option>
//           <option>Nashik</option>
//           <option>Aurangabad</option>
//           <option>Nagpur</option>
//           <option>Mumbai</option>
//           <option>Thane</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="chefimage">Chef Image</Label>
//         <Input type="file" name="file" id="chefimage" />
//         <FormText color="muted">
//           Upload Your Image 
//         </FormText>
//       </FormGroup>

//       <Button>Submit</Button>
//     </Form>
//     )
// }

export const ChefRegister = ({
    registerUser,
    removeMessage,
    loading,
    success,
    status
}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password
        });
    };
    return (
        <div className="col-md-6 col-sm-12">
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mt-5">
                    <Label>
                        <h3>Register here!</h3>
                    </Label>
                </FormGroup>
                <div className="text-left">
                    <FormGroup>
                        <Label for="registerFirstName">First name</Label>
                        <Input
                            tabIndex={1}
                            type="text"
                            name="firstName"
                            id="registerFirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerLastName">Last Name</Label>
                        <Input
                            tabIndex={2}
                            type="text"
                            name="lastName"
                            id="registerLastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerEmail">Email</Label>
                        <Input
                            tabIndex={4}
                            type="email"
                            name="email"
                            id="registerEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerUserNmae">Username</Label>
                        <Input
                            tabIndex={4}
                            type="text"
                            name="userName"
                            id="registerUserName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerPassword">Password</Label>
                        <Input
                            tabIndex={5}
                            type="password"
                            name="password"
                            id="registerPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="text-center">
                        {/* <StatusMessage
                  loading={loading}
                  success={success}
                  status={status}
                /> */}
                    </FormGroup>
                    <FormGroup className="text-center col-12 d-flex flex flex-column align-items-center">
                        <Button
                            tabIndex={6}
                            color="primary"
                            className="col-md-6 col-sm-12 mt-3"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            <i class="bi bi-binoculars"></i>
                            {loading ? "Registering..." : "Register Now!"}
                        </Button>
                        <NavLink>
                            <Link to="/login">Click Login</Link>
                        </NavLink>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
};

ChefRegister.propTypes = {
    registerUser: PropTypes.func.isRequired,
    removeMessage: PropTypes.func.isRequired
};

    // export default ChefRegister;
