import "../css/widebox.css";
import "./YourCart.css";

function YourCart() {
  return (
    <>
      <div className="widebox">
        <hr style={{ color: "white" }}></hr>
        <h1 style={{ color: "white" }}>My Purchase</h1>
        <div className="purchase">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col" className="thhead">
                  ID
                </th>
                <th scope="col" className="thhead">
                  Item Name
                </th>
                <th scope="col" className="thhead">
                  Amount
                </th>
                <th scope="col" className="thhead">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className="tdrow">Mark</td>
                <td className="tdrow">Otto</td>
                <td className="tdrow">@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td className="tdrow">
                  <div className="item">
                    <img
                      className="itempic"
                      src="https://picsum.photos/200/300"
                      alt="itempic"
                    ></img>
                    Jacob
                  </div>
                </td>
                <td className="tdrow">
                  <div className="item">
                    <button>-</button>Thornton<button>+</button>
                  </div>
                </td>
                <td className="tdrow">
                  <div className="item">@fat</div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr style={{ color: "white" }}></hr>
        <div className="totalpricebox">
          <h5 className="totalprice">Total price : 50 Baht</h5>
        </div>
        <div className="purchasebox">
          <button className="purchasebutt"> Purchase </button>
        </div>
      </div>
    </>
  );
}
export default YourCart;
