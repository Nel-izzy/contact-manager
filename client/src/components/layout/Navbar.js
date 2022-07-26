import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { logout, user, isAuthenticated } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li> Hello, {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm"></span>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Manager",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
