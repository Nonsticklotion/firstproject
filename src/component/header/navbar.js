import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench,faDesktop } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <>
      <nav class="navbar d-flex flex-row navbar-light bg-light">
        <div class="d-flex flex-row">
          <a class="navbar-brand ml-5" href="/home">
            <img
              // src="https://res.cloudinary.com/ddrwonhdb/image/upload/v1664359314/xvxwnypzyvx3gkvooevd.jpg"
              width="30"
              height="30"
              class="d-inline-block align-top "
              alt=""
            />
            PC Part
          </a>
          <div class="m-2">
          <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
          </div>
          <a class="navbar-brand mr-5" href="/builder">
            Build your PC
          </a>
          <div class="m-2">
            <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
          </div>
          <a class="navbar-brand mr-5" href="/choosebuild">
            Browse Product
          </a>
        </div>
        <div>
          <button type="button" class="btn btn-primary m-1">
            Log in
          </button>
          <button type="button" class="btn btn-primary m-1">
            Register
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
