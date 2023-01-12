import { Link } from "react-router-dom";

function Footer() {
  const Footerstyle = {
    color: "white",
    backgroundColor: "#1A1B22",
    fontFamily: "Arial",
    padding: "0 5px 0 5px  ",
  };
  return (
    <>
      {/* <div style={Footerstyle}> */}
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top"
        style={Footerstyle}
      >
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              // src="https://res.cloudinary.com/ddrwonhdb/image/upload/v1664359314/xvxwnypzyvx3gkvooevd.jpg"
              width="30"
              height="30"
              class="d-inline-block align-top "
              alt=""
            />
          </a>
          <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>

        <ul class="nav col-md-3 justify-content-end list-unstyled d-flex">
          <Link className="nav-link" to="/home">
            <i class="fa-brands fa-facebook fs-5" />
          </Link>
          <Link className="nav-link" to="/home">
            <i class="fa-brands fa-twitter fs-5" />
          </Link>
          <Link className="nav-link" to="/home">
            <i class="fa-brands fa-instagram fs-5" />
          </Link>
        </ul>
      </footer>
      {/* </div> */}
    </>
  );
}

export default Footer;
