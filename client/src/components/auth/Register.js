import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const DEFAULT_USER = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(DEFAULT_USER);

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const { name, email, password, confirmPassword } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please fill empty fields", "danger");
    } else if (password.length < 6 || confirmPassword.length < 6) {
      setAlert("Password must be at least 6 characters", "warning");
    } else if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }

    setUser(DEFAULT_USER);
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={onChange} name="name" value={name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={onChange} name="email" value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={onChange}
            name="password"
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <input
            type="password"
            onChange={onChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default Register;
