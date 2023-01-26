import "../css/widebox.css";
import "../allproduct/Product.css";
function Product() {
  return (
    <>
      <div className="widebox">
        <div className="product">
          <div className="left">
            <div className="productPic">
              <img
              className="productpic"
                src="https://picsum.photos/seed/5/100"
                alt="description of cpu"
              />
            </div>
            <div className="description"></div>
          </div>
          <div className="right">
            <div className="productNameS">Core I3 13100</div>
            <div className="prices">
              <div className="price">
                <strong>Price 4000</strong>
                <div className="unit">Baht</div>
              </div>
            </div>
            <div className="addordelete">
              <button className="butt">-</button>
              <input
                type="text"
                value="1"
                class="addtext"
                name="count_market"
                id="count_market"
              ></input>
              <button className="butt">+</button>
            </div>
            <button className="buttt">Add to the cart</button>
          </div>
        </div>
        <div className="description">
          <h1>Description</h1>
          lol
        </div>
      </div>
    </>
  );
}
export default Product;
