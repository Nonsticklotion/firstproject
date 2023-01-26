function UserAddress() {
  const margineach = { margin: "10px 5px" };
  return (
    <>
      <div
        className="Address"
        style={{
          margin: "10px 5px",
          display: "flex",
          flexDirection: "column",
          width: "50em",
        }}
      >
        <h1 style={{ color: "white" }}>Address Book</h1>

        <div class="input-group" style={{ margin: "20px 5px" }}>
          <div class="input-group-prepend">
            <span class="input-group-text">First and last name</span>
          </div>
          <input type="text" aria-label="First name" class="form-control" />
          <input type="text" aria-label="Last name" class="form-control" />
        </div>

        <div class="input-group" style={margineach}>
          <div class="input-group-prepend">
            <span class="input-group-text">Address 1</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <div class="input-group" style={margineach}>
          <div class="input-group-prepend">
            <span class="input-group-text">Address 2</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <div class="input-group mb-3" style={margineach}>
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Options
            </label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="input-group mb-3" style={margineach}>
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Options
            </label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="input-group mb-3" style={margineach}>
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Options
            </label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="input-group mb-3" style={{margin:"10px 5px",width:"300px"}}>
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Zip Code
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <button type="button" class="btn btn-primary" style={{width:"100px"}}>Submit</button>
      </div>
    </>
  );
}

export default UserAddress;
