import { Link } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/header/Navbar";
import "./LoginForm.css";
function LoginForm() {
  return (
    <>
      <div className="widebox">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="bigLoginCard">
          <div class="cardRegister">
            <div className="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="password">
              <div className="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login-button">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
            <div className="forgetPassword">
              <p>Not registered?</p>
              <div className="createNewAcc">
                <Link to="/build">
                  <a href="url">Create New Account</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LoginForm;
