import "../../css/widebox.css";
import "./filter.css";
import ProductTable from "../../layout/ProductTable/ProductTable";
function Cpu() {
  return (
    <>
      <div className="widebox">
        <div className="header">
          <h1>Choose Cpu</h1>
        </div>
        <div className="container">
          <div className="filter">
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </form>
          </div>
          <div className="table">
            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cpu;
