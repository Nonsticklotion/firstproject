import "./css/widebox.css";
import "./css/home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="widebox">
        <div className="bigbox1">
          <div className="whatsnew">
            <h1 className="h1product">New </h1>
            <h1 className="h1product">Products!!</h1>
          </div>
          <div className="showproduct">
            <div class="card">
              <img
                src="https://picsum.photos/seed/5/120"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link>
                  <button class="btn btn-primary">Go somewhere</button>
                </Link>
              </div>
            </div>
            <div class="card">
              <img
                src="https://picsum.photos/seed/5/120"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link>
                  <button class="btn btn-primary">Go somewhere</button>
                </Link>
              </div>
            </div>
            <div class="card">
              <img
                src="https://picsum.photos/seed/5/120"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link>
                  <button class="btn btn-primary">Go somewhere</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
