import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  const mystyle = {
    color: "white",
    backgroundColor: "#1A1B22",
    fontFamily: "Arial",
  };
  const iconstyle = {
    padding: "0 10px 10px 5px",
  };
  const padding = {
    padding: "5px 5px 0px 5px",
  };
  const nevbarIcon = "d-flex flex-row";

  return (
    <>
      <nav
        sticky="top"
        class="navbar d-flex flex-row navbar-light "
        style={mystyle}
      >
        <div class="d-flex flex-row" style={padding}>
          <Link to="/home">
            <a class="navbar-brand ml-5 d-flex flex-row" href="/home">
              <div style={iconstyle}>
                <img
                  // src="https://res.cloudinary.com/ddrwonhdb/image/upload/v1664359314/xvxwnypzyvx3gkvooevd.jpg"
                  width="30"
                  height="30"
                  class="d-inline-block align-top "
                  alt=""
                />
              </div>
              <div class="text-warning ">PC Part</div>
            </a>
          </Link>
          <div class={nevbarIcon}>
            <div class="m-2">
              <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
            </div>
            <a class="navbar-brand mr-5" href="/builder">
              <div class="text-light">Build your PC </div>
            </a>
          </div>
          <div class={nevbarIcon}>
            <div class="m-2">
              <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
            </div>
            <a class="navbar-brand mr-5" href="/product">
              <div class="text-light">Browse Product </div>
            </a>
          </div>
        </div>
        <div>
          <Link to="/login">
            <button type="button" class="btn btn-primary m-1">
              Log in
            </button>
          </Link>
          <Link to="/register">
            <button type="button" class="btn btn-primary m-1">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
