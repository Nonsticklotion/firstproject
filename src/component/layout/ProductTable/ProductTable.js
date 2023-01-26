function ProductTable() {
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">TDP</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo <button type="button" class="btn btn-primary">Primary</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob </td>
            <td>Thornton</td>
            <td>@fat <button type="button" class="btn btn-primary">Primary</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter <button type="button" class="btn btn-primary">Primary</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
