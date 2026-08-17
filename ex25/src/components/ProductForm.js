import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductAsync } from '../redux/productSlice';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from 'reactstrap';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [catalogs, setCatalogs] = useState('catalog1, catalog2');
  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return;

    setSubmitting(true);

    const newProduct = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      description: description || 'New product description.',
      catalogs: catalogs.split(',').map((c) => c.trim()).filter(Boolean),
    };

    await dispatch(addProductAsync(newProduct));
    setSubmitting(false);
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Card className="shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <CardBody>
          <CardTitle tag="h3" className="mb-4 text-center text-primary">
            Create New Product
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <Label for="name">Product Name *</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Wireless Headphones"
                required
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="price">Price ($) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. 49.99"
                required
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="description">Description</Label>
              <Input
                id="description"
                type="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description..."
                rows="3"
              />
            </FormGroup>

            <FormGroup className="mb-4">
              <Label for="catalogs">Catalogs (comma-separated)</Label>
              <Input
                id="catalogs"
                type="text"
                value={catalogs}
                onChange={(e) => setCatalogs(e.target.value)}
                placeholder="e.g. electronics, audio"
              />
            </FormGroup>

            <Button color="success" type="submit" className="w-100" disabled={submitting}>
              {submitting ? 'Adding Product via Thunk...' : 'Add Product'}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductForm;
