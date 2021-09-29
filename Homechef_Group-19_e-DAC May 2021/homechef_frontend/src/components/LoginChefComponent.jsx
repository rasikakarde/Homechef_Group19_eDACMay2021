import React, { useEffect, useState ,Component } from "react";

import ChefService from '../services/ChefService'
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import PropTypes from "prop-types";
// import StatusMessage from "../../Helpers/StatusMessage";
import { Link } from "react-router-dom";
import AuthenticationService from '../services/AuthenticationService'

class LoginChefComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
        emailid: '',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
}

handleChange(event) {
    this.setState(
        {
            [event.target.name]
                : event.target.value
        }
    )
}

loginClicked() {
    /* if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        this.setState({showSuccessMessage:true})
        this.setState({hasLoginFailed:false})
    }
    else {
         this.setState({showSuccessMessage:false})
         this.setState({hasLoginFailed:true})
    }
} */
    AuthenticationService
    .executeBasicAuthenticationService(this.state.emailid, this.state.password)
    .then(() => {
        AuthenticationService.registerSuccessfulLogin(this.state.emailid, this.state.password)
        this.props.history.push(`view-chef/1`)
    }).catch(() => {
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
})
}


render() {
    return (
        <div>
            <h1>Login</h1>
            <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                User Name: <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        </div>
    )
}
}



 export default LoginChefComponent ;
