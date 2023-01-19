import "./RegisterForm.css";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/header/Navbar";
function RegisterForm() {
  const margininput = "5px";
  return (
    <>
      <div className="widebox">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="register">
          
          <div className="backregister">
            <form className="form">
            <h1>Register</h1>
              <div className="fnamelname">
                <div className="fname">
                  <label for="inputEmail4">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Firstname"
                  />
                </div>
                <div className="lname">
                  <label for="inputEmail4">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Lastname"
                  />
                </div>
              </div>

              <div className="Emailpassword">
                <div className="email">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="password">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="address1">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="address2">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="CityStateZip">
                <div className="city">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div className="state">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="zip">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <div className="phonenumber">
                <label for="inputEmail4">Phone number</label>
                <input
                  type="phonenumber"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Phone Number"
                />
              </div>
              <div className="submitbotton">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default RegisterForm;
