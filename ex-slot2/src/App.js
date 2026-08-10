import { products } from "./models/Product";

function App() {
  const maxPrice = products.reduce((max, product) =>
    product.outPrice > max.outPrice ? product : max,
  );

  const minPrice = products.reduce((min, product) =>
    product.outPrice < min.outPrice ? product : min,
  );

  const productsWithProfit = products
    .map((product) => ({
      ...product,
      profit: product.outPrice - product.inputPrice,
    }))
    .sort((a, b) => b.profit - a.profit);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
            <th>Tồn kho</th>
            <th>Trạng thái</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.inputPrice}</td>
              <td>{product.outPrice}</td>
              <td>{product.stock}</td>
              <td>{product.stock > 0 ? "Còn hàng" : "Hết hàng"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Giá bán</h2>

      <p>
        <b>Giá bán cao nhất:</b> {maxPrice.name} - {maxPrice.outPrice}
      </p>

      <p>
        <b>Giá bán thấp nhất:</b> {minPrice.name} - {minPrice.outPrice}
      </p>

      <h2>Sản phẩm theo lợi nhuận giảm dần</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
            <th>Lợi nhuận</th>
          </tr>
        </thead>

        <tbody>
          {productsWithProfit.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.inputPrice}</td>
              <td>{product.outPrice}</td>
              <td>{product.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
