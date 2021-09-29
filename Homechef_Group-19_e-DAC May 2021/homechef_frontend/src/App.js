import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListChefComponent from './components/ListUserComponent.jsx';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateChefComponent from './components/CreateChefComponent.jsx';
import ViewChefComponent from './components/ViewChefComponent.jsx';
import createMenuComponent from './components/createMenuComponent';
import ListMenuComponent from './components/ListMenuComponent';
import LoginChefComponent from './components/LoginChefComponent';
import ChefMenuDetailsComponent from './components/ChefMenuDetailsComponent';
import UpdateChefComponent from './components/UpdateChefComponent';
import AllChefComponent from './components/AllChefComponent';
import SpecialityComponent from './components/SpecialityComponent';
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";
import Home from "./components/Home";
/* //import ChefByCityComponent from './components/ChefByCityComponent'; */
import ListUserComponent from './components/ListUserComponent.jsx';



function App() {
  return (
    <div>
        <Router>
        <HeaderComponent />
                <div className="container fluid">
                    <Switch> 
                        <Route path = "/" exact component = {AllChefComponent}></Route>                           
                        <Route path = "/chefs" component = {ListChefComponent}></Route>
                        <Route path = "/menus" component = {ListMenuComponent}></Route>
                          <Route path = "/add-chef/:chefid" component = {CreateChefComponent}></Route>
                          <Route path = "/update-chef/:chefid" component = {UpdateChefComponent}></Route>
                          <Route path = "/chefLogin" component = {LoginChefComponent}></Route>
                          <Route path = "/view-chef/:chefid" component = {ViewChefComponent}></Route>
                          <Route path = "/chefMenu/:chefid" component = {ChefMenuDetailsComponent}></Route>
                          <Route path = "/add-menu/:chefid" component = {createMenuComponent}></Route>
                          <Route path = "/speciality" component = {SpecialityComponent}></Route>  
                          {/* //<Route path = "/getChefByCity/:city" component = {AllChefComponent}></Route>
                          //<Route path = "/city" component = {ChefByCityComponent}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                          <Route path="/login" component={Login}/>
                          <Route exact path="/admin" component={ListUserComponent} />
                          <Route exact path="/logout" component={Logout} />
                          <Route exact path="/location" component={Home}/>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;