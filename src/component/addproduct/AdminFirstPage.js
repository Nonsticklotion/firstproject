import { Link } from "react-router-dom";
import "../css/Addwidebox.css";
import "./AdminFirstPage.css";

function AdminFirstPage() {
  return (
    <>
      <div className="widebox">
        <div className="bigcontainer">
          <div className="editproduct">
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
                <Link to="/adminhome/addproduct">
                  <button class="btn btn-primary">Go somewhere</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="order">
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
                <Link to="/adminhome/order">
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
export default AdminFirstPage;
