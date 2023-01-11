function Navbar() {
  return (
    <>
      <nav class="navbar d-flex .flex-column navbar-light bg-light">
        <div>
          <a class="navbar-brand mr-5" href="/home">
            <img
              // src="https://res.cloudinary.com/ddrwonhdb/image/upload/v1664359314/xvxwnypzyvx3gkvooevd.jpg"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            PC Part
          </a>
          
          <a class="navbar-brand mr-5" href="/builder">
            Build your PC
          </a>
          <a class="navbar-brand mr-5" href="/choosebuild">
            PC Part
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
