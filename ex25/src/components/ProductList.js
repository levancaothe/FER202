import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/productSlice';
import { Button, Card, CardBody, CardTitle, CardText, Badge, Row, Col, Spinner } from 'reactstrap';

const ProductList = () => {
  const { items, loading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner color="primary" />
        <p className="mt-2">Loading Products via Redux Thunk...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger my-4">Error loading products: {error}</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-primary border-bottom pb-2">Product List</h2>
      <Row>
        {items.map((product) => (
          <Col md="4" sm="6" key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <CardBody className="d-flex flex-column justify-content-between">
                <div>
                  <CardTitle tag="h5" className="text-dark">{product.name}</CardTitle>
                  <small className="text-muted d-block mb-2">ID: {product.id}</small>
                  <CardText>{product.description}</CardText>
                  <h4 className="text-success font-weight-bold">${product.price}</h4>
                  <div className="mb-3">
                    <small className="text-muted font-weight-bold me-2">Catalogs:</small>
                    {product.catalogs.map((cat, idx) => (
                      <Badge color="secondary" className="me-1" key={idx}>
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  color="primary" 
                  onClick={() => dispatch(addToCart(product))}
                  className="w-100 mt-2"
                >
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
