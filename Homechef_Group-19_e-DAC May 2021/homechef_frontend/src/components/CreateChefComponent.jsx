import React, { Component } from 'react'
import ChefService from '../services/ChefService';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useState } from 'react';

class CreateChefComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            chefid: this.props.match.params.chefid,
            firstname: '',
            lastname: '',
            gender: '',
            emailid: '',
            password: '',
            address: '',
            city: '',
            contactnumber: '',
            cuisineid: '',

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateChef = this.saveOrUpdateChef.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.chefid === '_add') {
            return
        } else {
            ChefService.getChefById(this.state.chefid).then((res) => {
                let chef = res.data;
                this.setState({
                    firstname: chef.firstname,
                    lastname: chef.lastname,
                    emailid: chef.emailid,
                    // address : chef.address.ChefService,
                    gender: chef.gender,
                    address: chef.address,
                    city: chef.city,
                    contactnumber: chef.contactnumber,
                    cuisineid: chef.cuisineid

                });
            });
        }
    }

    saveOrUpdateChef = (c) => {
        c.preventDefault();
        let chef = {
            firstname: this.state.firstname, lastname: this.state.lastname, emailid: this.state.emailid, gender: this.state.gender, password: this.state.password,
            address: this.state.address, city: this.state.city, contactnumber: this.state.contactnumber, cuisineid: this.state.cuisineid
        };
        console.log('chef => ' + JSON.stringify(chef));


        // step 5
        if (this.state.chefid === '_add') {
            ChefService.createChef(chef)
                .then(response => this.setState({ newChefid: response.data.chefid }))
                .then(res => {
                    this.props.history.push(`/view-chef/${this.state.newChefid}`);
                });
        } else {
            ChefService.updateChef(chef, this.state.chefid).then(res => {
                this.props.history.push('/chefs');
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstname: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailid: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changeContactNumberHandler = (event) => {
        this.setState({ contactnumber: event.target.value });
    }

    changeSpecialityHandler = (event) => {
        this.setState({ cuisineid: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }

    getTitle() {
        if (this.state.chefid === '_add') {
            return <h3 className="text-center">Add Chef</h3>
        } else {
            return <h3 className="text-center">Update Chef</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form onSubmit={this.saveOrUpdateChef}>
                                    <div className="form-group">
                                        <label> First Name: </label><span style={{ color: 'red' }}>*</span>
                                        <input placeholder="First Name" name="firstname" className="form-control"
                                            required value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastname" className="form-control"
                                            value={this.state.lastname} onChange={this.changeLastNameHandler} />
                                    </div>
                                    {/* <div className = "form-group"> 
                                                 <label> Gender: </label>
                                        </div>   */}
                                    {/*  <div className = "radio">
                                            <label> 
                                            <input 
                                                type="radio" 
                                                name="gender"
                                                id="male" 
                                                //className="form-control" 
                                                value={this.state.gender === "Male"}
                                                onChange={this.changeGenderHandler}
                                            />
                                            Male
                                            </label>
                                        </div>
                                        <div className = "radio">
                                            <label> 
                                            <input 
                                                type="radio" 
                                                name="gender"
                                                id="female" 
                                                //className="form-control" 
                                                value={this.state.gender === "Female"}
                                                onChange={this.changeGenderHandler}
                                            />
                                            Female
                                            </label>
                                        </div> */}


                                    <div className="form-group">
                                        <label> Email Id: </label><span style={{ color: 'red' }}>*</span>
                                        <input placeholder="Email Address" name="emailid" className="form-control"
                                            required type="email" value={this.state.emailid} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label><span style={{ color: 'red' }}>*</span>
                                        <input placeholder="Password" name="password" className="form-control"
                                            required type="password" value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> City </label><span style={{ color: 'red' }}>*</span>
                                        <input placeholder="City" name="city" className="form-control"
                                            required value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Contact Number </label><span style={{ color: 'red' }}>*</span>
                                        <input placeholder="Contact" name="contactnumber" className="form-control"
                                            required type="text" maxlength='10' value={this.state.contactnumber} onChange={this.changeContactNumberHandler} />
                                    </div>
                                    {/*   <div className = "form-group">
                                            <label> Status </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div> */}

                                    <div className="form-group">
                                        <label> Speciality </label><span style={{ color: 'red' }}>*</span>
                                        <select className="form-control" required value={this.state.value} onChange={this.changeSpecialityHandler}>
                                            <option selected>-Select Your Speciality-</option>
                                            <option value= '1'>Bakery</option>
                                            <option value='2'>Maharashtrian</option>
                                            <option value='3'>South Indian</option>
                                            <option value='4'>Gujarati</option>
                                            <option value='5'>Punjabi</option>
                                            <option value='6'>Pizza</option>
                                            <option value='7'>Chinese</option>
                                        </select>
                                    </div>

                                    <br />
                                    <button className="btn btn-success">Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default CreateChefComponent