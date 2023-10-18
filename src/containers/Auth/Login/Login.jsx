import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/apiRequest";
import { useDispatch } from "react-redux";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
    };

    loginUser(newUser, dispatch, navigate);
  };

  return (
    <section className="login-container">
      <div className="login-title">LOGIN</div>
      <form onSubmit={handleLogin} className="form">
        <div className="wrap-input100 validate-input m-b-26">
          <span className="label-input100">USERNAME</span>
          <input
            className="input100"
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="wrap-input100 validate-input m-b-18">
          <span className="label-input100">PASSWORD</span>
          <input
            className="input100"
            type="password"
            placeholder="Enter your password"
            fadePlaceholderShown
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" type="submit">
            Continue
          </button>
        </div>
      </form>
      <div className="link">
        <div className="login-register"> Don't have an account yet? </div>
        <Link className="login-register-link" to="/register">
          Register for free
        </Link>
      </div>
    </section>
  );
};

export default Login;
