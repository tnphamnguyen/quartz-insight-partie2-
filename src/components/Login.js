import React, { useState } from 'react';
import logo from './../../src/img/logo.jpg';
import { useHistory } from 'react-router-dom';
const Login = props => {
  const [errorMsg, setErrorMsg] = useState('');
  const [uname, setUname] = useState('');
  const [upassword, setUpassword] = useState('');

  const history = useHistory();

  const handleChangeUname = e => {
    setErrorMsg('');
    setUname(e.target.value);
  };
  const handleChangeUpassword = e => {
    setErrorMsg('');
    setUpassword(e.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit', uname, upassword);
    if (uname !== 'admin' || upassword !== 'password')
      setErrorMsg('Veuillez entrer "admin" - "password"');
    else {
      setErrorMsg('');
      history.push('/profile');
    }
  };

  return (
    <React.Fragment>
      <div className="containerPanel">
        <div className="panelLogin">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="imgcontainer">
              <img src={logo} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <div className="formControl">
                <label htmlFor="uname">
                  <b>Username</b>
                </label>
                <input
                  onChange={handleChangeUname}
                  className="inputLogin"
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />
              </div>
              <div className="formControl">
                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  onChange={handleChangeUpassword}
                  className="inputLogin"
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />
              </div>
              <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                <button>
                  <i className="fa fa-times-circle w3-xxlarge"></i>
                </button>
                <button className="right" onClick={handleSubmit}>
                  <i className="fa fa-sign-in w3-xxlarge"></i>
                </button>
              </div>
              {/* error message */}
              {errorMsg && (
                <div className="error">
                  <i className="fa fa-exclamation-triangle w3-large spaceMr"></i>
                  {errorMsg}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
