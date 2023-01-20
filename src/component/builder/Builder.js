import "../css/widebox.css";
import "./Builder.css";
function Builder() {
    let price = 50
  return (
    <>
      <div className="widebox">
        <div className="choosePart">Choose Your Parts</div>
        <div className="Parts">
          <div className="wattage">
            <div className="boxwatt"></div>
            <div className="watt">Estimated Wattage xx W</div>
          </div>
          <div className="pickpart">
            <table class="table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Selection</th>
                  <th>Price</th>
                  <th>Handle</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="firstTd">
                  <td>CPU</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr className="allrow">
                  <td>CPU Cooler</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr className="allrow">
                  <td>Motherboard</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr className="allrow"> 
                  <td>Memory</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr className="allrow">
                  <td>Storage</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr className="allrow">
                  <td>Video Card</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr className="allrow">
                  <td>Case</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr className="allrow">
                  <td>Power Supply</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="total">
            <p>Total Price : {price} $</p>
            <button className="submitbut">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Builder;
