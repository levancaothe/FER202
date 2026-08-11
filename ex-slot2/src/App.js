import { useState } from "react";
import { products } from "./models/Product";
import { Button, Card, Col, Row } from "react-bootstrap";

function App() {
  const [productList, setProductList] = useState(products);

  const maxPrice = productList.reduce((max, product) =>
    product.outPrice > max.outPrice ? product : max,
  );

  const minPrice = productList.reduce((min, product) =>
    product.outPrice < min.outPrice ? product : min,
  );

  const productsWithProfit = productList
    .map((product) => ({
      ...product,
      profit: product.outPrice - product.inputPrice,
    }))
    .sort((a, b) => b.profit - a.profit);

  const handleBuy = (id) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.stock > 0
          ? {
              ...product,
              stock: product.stock - 1,
            }
          : product,
      ),
    );
  };

  return (
    <div className="ms-5">
      <h2>Danh sách sản phẩm</h2>

      <Row className="mt-3 mb-3">
        {productList.map((product) => (
          <Col md={3} key={product.id}>
            <Card>
              <Card.Img
                className="card-img-top"
                src={product.img}
                alt={product.name}
                style={{
                  width: "90%",
                  height: 200,
                }}
              />

              <Card.Text className="ms-3">
                <strong>ID:</strong> {product.id}
              </Card.Text>

              <Card.Text className="ms-3">
                <strong>Name:</strong> {product.name}
              </Card.Text>

              <Card.Text className="ms-3">
                <strong>Input Price:</strong> {product.inputPrice}
              </Card.Text>

              <Card.Text className="ms-3">
                <strong>Out Price:</strong> {product.outPrice}
              </Card.Text>

              <Card.Text className="ms-3">
                <strong>Stock:</strong> {product.stock}
              </Card.Text>

              <Card.Text className="ms-3">
                <strong>Status:</strong>{" "}
                {product.stock > 0 ? "Còn hàng" : "Hết hàng"}
              </Card.Text>

              <div className="text-center">
                <Button
                  variant="primary"
                  className="mb-1"
                  style={{
                    backgroundColor: product.stock > 0 ? "blue" : "grey",
                    width: "50%",
                  }}
                  onClick={() => handleBuy(product.id)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? "Mua ngay" : "Hết hàng"}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

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
