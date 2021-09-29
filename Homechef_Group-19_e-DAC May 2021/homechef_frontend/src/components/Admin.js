import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ListUserComponent from "./ListUserComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class Admin extends Component {
  // constructor(props) {
  //   super(props);
  //   const token = localStorage.getItem("token");
  //   let loggedIn = true;
  //   if (token === null) {
  //     loggedIn = false;
  //   }
  //   this.state = {
  //     loggedIn
  //   };
  // }
  render() {
    // if (this.state.loggedIn === false) {
    //   return <Redirect to="/admin" />;;
    // }
    return (
      <div className="Admin">
        <>
        <br/>
        <ListUserComponent/>
        </>
        <div style={{textAlign:'center'}}>
        <button className="btn btn-danger">
          <Link to="/logout" style={{ textDecoration: 'none', color:'white' }}>Logout</Link>
        </button>
        </div>
        <br/>
      </div>
    );
  }
}
