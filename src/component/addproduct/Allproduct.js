import "../css/widebox.css";
import "./product/allproductCard.css";
import { Link } from "react-router-dom";
function Allproduct() {
  return (
    <>
      <div className="widebox">
        <div className="bfall">
          <div className="allproductcard">
            <Link to="/product/cpu">
              <div className="cpu">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100" alt="description of cpu"/>
                  <div className="word">CPU</div>
                </div>
              </div>
            </Link>
            <Link to="/product/cpu-cooler">
              <div className="cpu-cooler">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100" alt="description of cpucooler"/>
                  <div className="word">Cpu Cooler</div>
                </div>
              </div>
            </Link>
            <Link to="/product/motherboard">
              <div className="motherboard">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100" alt="description of motherboard"/>
                  <div className="word">Motherboard</div>
                </div>
              </div>
            </Link>
            <Link to="/product/memory">
              <div className="memory">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100"alt="description of memory" />
                  <div className="word">Memory</div>
                </div>
              </div>
            </Link>
            <Link to="/product/internal-drive">
              <div className="internal-drive">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100"alt="description of internal-drive" />
                  <div className="word">Internal Drive</div>
                </div>
              </div>
            </Link>
            <Link to="/product/video-card">
              <div className="video-card">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100"alt="description of video-card" />
                  <div className="word">Video Card</div>
                </div>
              </div>
            </Link>
            <Link to="/product/case">
              <div className="case">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100"alt="description of case" />
                  <div className="word">Case</div>
                </div>
              </div>
            </Link>
            <Link to="/product/power-supply">
              <div className="power-supply">
                <div className="card">
                  <img src="https://picsum.photos/seed/5/100"alt="description of power-supply" />
                  <div className="word">Power Supply</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Allproduct;
