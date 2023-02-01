import "./css/widebox.css";
import "./css/BfHome.css";
import { Link } from "react-router-dom";

function BfHome() {
  return (
    <>
      <div className="widebox">
        <div className="bigbox">
          <div className="box">
            <div>
              <img
                className="bfhomepic"
                src="https://picsum.photos/seed/5/120"
                alt="bfhomepic"
              />
            </div>
            <Link to="/home">
              <div>
                <button className="enterwebsitebutt">
                  Click For Enter Website
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default BfHome;
