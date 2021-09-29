import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Common';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const emailid = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);


  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    if(emailid.value=='admin' && password.value=='admin123'){
      props.history.push('/admin');
    }else if(emailid.value=='null' || password.value=='null'){
          alert("username or password is incorrect");
    }else{
    axios.post('http://localhost:8080/homechefDemo/cheflogin', { emailid: emailid.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/chefMenu/:chefid');
    }).catch(error => {
      alert("Incorrect username or password...")
      setLoading(false);
      if (error.response) {
        // Request made and server responded
        alert("Incorrect username or password...")
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  }
  }

  return (
    <div>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form>
              <h3 className="text-center">Login</h3>
                <div className="form-group">
                  <label> Email Id: </label><span style={{ color: 'red' }}>*</span>

                  <input placeholder="Email Address" name="emailid" className="form-control"
                   required type="email" {...emailid} autoComplete="new-password" />
                </div>
                <div className="form-group">
                  <label> Password: </label><span style={{ color: 'red' }}>*</span>
                  <input placeholder="Password" name="password" className="form-control"
                   required type="password" {...password} autoComplete="new-password" />
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <input type="button" className="btn btn-success" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
              </form>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

function validate(){
  let input = this.state.input;
  let errors = {};
  let isValid = true;


  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Please enter your email Address.";
  }

  if (typeof input["email"] !== "undefined") {
      
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(input["email"])) {
      isValid = false;
      errors["email"] = "Please enter valid email address.";
    }
  }

  if (!input["password"]) {
    isValid = false;
    errors["password"] = "Please enter your password.";
  }

  if (typeof input["password"] !== "undefined") {
    if(input["password"].length < 6){
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
    }
  }

  this.setState({
    errors: errors
  });

  return isValid;
}



export default Login;