import React from 'react';
import logo from './../../src/img/logo.jpg';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Menu = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="logo">
        <img src={logo} alt="Logo" className="avatar" />
      </div>
      <ul className="menu">
        <li>
          <Link to={'/profile'}>
            <i className="fa fa-user w3-xlarge spaceMr"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to={'/friends'}>
            <i className="fa fa-list-ul w3-large spaceMr"></i>
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link to={'/login'}>
            <i className="fa fa-sign-in w3-large spaceMr"></i>
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Menu;
