import React, { Component } from 'react'
import ChefService from '../services/ChefService';

class UpdateChefComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            chefid: this.props.match.params.chefid,
            firstname: '',
            lastname: '',
            gender:'',
            emailid: '',
            paasword:'',
            address: '',
            city: '',
            contactnumber: '',
            status:''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateChef = this.saveOrUpdateChef.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.chefid === '_update'){
            return
        }else{
            ChefService.getChefById(this.state.chefid).then( (res) =>{
                let chef = res.data;
                this.setState({firstname: chef.firstname,
                    lastname: chef.lastname,
                    emailid : chef.emailid,
                   // address : chef.address.ChefService,
                    gender :chef.gender,
                    address : chef.address,
                    city    : chef.city,
                    contactnumber:chef.contactnumber,
                    status:chef.status
                });
            });
        }        
    }
    
    saveOrUpdateChef = (c) => {
        c.preventDefault();
        let chef = {firstname: this.state.firstname, lastname: this.state.lastname, emailid: this.state.emailid,gender: this.state.gender, password: this.state.password,
            address: this.state.address,city: this.state.city,contactnumber: this.state.contactnumber,status:this.state.status};
        console.log('chef => ' + JSON.stringify(chef));
        

        // step 5
        if(this.state.chefid === '_update'){
            ChefService.updateChef(chef)
            .then(response=> this.setState( {Chefid:response.data.chefid}))           
            .then(res =>{
                this.props.history.push(`/update-chef/${this.state.chefid}`);             
            });     
        }else{
            ChefService.updateChef(chef, this.state.chefid).then( res => {
                this.props.history.push('/chefs');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstname: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailid: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeContactNumberHandler= (event) => {
        this.setState({contactnumber: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }



    cancel(){
        this.props.history.push('/chefs');
    }

    getTitle(){
        
             <h3 className="text-center">Update Chef</h3>
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstname" className="form-control" 
                                                value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastname" className="form-control" 
                                                value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailid" className="form-control" 
                                                value={this.state.emailid} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> City </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact Number </label>
                                            <input placeholder="Contact" name="contactnumber" className="form-control" 
                                                value={this.state.contactnumber} onChange={this.changeContactNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Status </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div> 


                                        <button className="btn btn-success" onClick={this.saveOrUpdateChef}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateChefComponent