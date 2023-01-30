import "../../css/widebox.css";
import "./AddFilter.css";
import AddProductTable from "../../layout/ProductTable/AddProductTable";

function AddInternalDrive() {
  return (
    <>
      <div className="widebox">
        <div className="header">
          <h1>Choose Cp Internal Drive</h1>
        </div>
        <div className="bigbox">
          <div className="contain">
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
              <AddProductTable />
            </div>
          </div>
          <div className="addcontain">
            <div className="addbox">
              <label for="select" className="labelName">
                Choose something pls
              </label>
              <input
                className="addinput"
                type="text"
                id="name"
                name="name"
                required
                minlength="4"
                maxlength="8"
                size="10"
              />
              <input type="button" className="submitbutton" value="submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddInternalDrive;
