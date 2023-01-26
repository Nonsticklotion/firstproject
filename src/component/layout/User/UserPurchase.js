function UserPurchase() {
  return (
    <>
      <hr style={{color:"white"}}></hr>
      <h1 style={{color:"white"}}>My Purchase</h1>
      <div className="Purchase">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Place on</th>
              <th scope="col">Items</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
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
    </>
  );
}

export default UserPurchase;
