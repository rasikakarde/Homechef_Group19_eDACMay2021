import React, { useEffect, useState } from "react";
import React, { Component } from 'react'
import MenuService from "../services/MenuService";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import PropTypes from "prop-types";
// import StatusMessage from "../../Helpers/StatusMessage";
import { Link } from "react-router-dom";

class AddMenu extends Component{
    constructor(props) {
        super(props)

        this.state = {
                menu: []
        }       
        this.addMenu = this.addMenu.bind(this);
    }
        componentDidMount(){
             MenuService.getMenus().then((res) => {
                this.setState({ menu: res.data});
             });
        }

         addMenu(){
             this.props.history.push('/add-menu/_addMenu');
         }



}
// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//export const ChefRegister = () => {
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

 export const addMenu= ({
    menuAdd,
    removeMessage,
    loading,
    success,
    status
 }) => {
    const [chefid, setChefId] = useState("");
     const [menuname, setMenuName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    //const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
         registerUser({
             chefid:chefid,
            menuname: menuname,
            description: description,
            price: price
           
        });
    };
    return (
        <div className="col-md-6 col-sm-12">
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mt-5">
                    <Label>
                        <h3>Add Menu</h3>
                    </Label>
                </FormGroup>
                <div className="text-left">
                <FormGroup>
                        <Label for="Chefid">Chef id</Label>
                        <Input
                            tabIndex={1}
                            type="text"
                            name="chefid"
                            id="addchefid"
                            value={chefid}
                            onChange={(e) => setChefId(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="addMenuName">Menu Name</Label>
                        <Input
                            tabIndex={2}
                            type="text"
                            name="menuname"
                            id="addMenuName"
                            value={menuname}
                            onChange={(e) => setMenuName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="menuDescription">Description</Label>
                        <Input
                            tabIndex={3}
                            type="text"
                            name="description"
                            id="menuDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="menuPrice">Price</Label>
                        <Input
                            tabIndex={4}
                            type="number"
                            name="price"
                            id="menuPrice"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
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
                            {loading ? "addingmenu..." : "Add menu Now!"}
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

 addMenu.propTypes = {
    menuAdd: PropTypes.func.isRequired,
     removeMessage: PropTypes.func.isRequired
 };

     export default addMenu;
