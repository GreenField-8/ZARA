import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTable from './prodTable';
import './prodmange.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  status: string;
}

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: '',
    image: '',
    description: '',
    category: '',
    price: 0,
    status: ''
  });
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/prod');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/addProd', newProduct);

      const createdProduct = response.data;
      setProducts(prevProducts => [...prevProducts, createdProduct]);
      console.log('New product created:', createdProduct);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleEdit = (product: Product) => {
    setEditedProduct(product);
  };

  const handleSave = async () => {
    if (editedProduct) {
      try {
        const response = await axios.put(
          `http://localhost:7000/api/updateProd/${editedProduct.id}`,
          editedProduct
        );

        const updatedProduct = response.data;
        setProducts(prevProducts =>
          prevProducts.map(product => (product.id === updatedProduct.id ? updatedProduct : product))
        );
        setEditedProduct(null);
        console.log('Product updated:', updatedProduct);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
  };

  const handleCancel = () => {
    setEditedProduct(null);
  };

  const handleDelete = async (productId: number) => {
    console.log('Delete:', productId);
    try {
      await axios.delete(`http://localhost:7000/api/deleteProd/${productId}`);
      setProducts(prevProducts =>
        prevProducts.filter(product => product.id !== productId)
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
    if (editedProduct) {
      setEditedProduct(prevProduct => ({
        ...prevProduct,
        [name]: value
      }));
    }
  };

  return (
    <div className="product-management">
      <div>
        <h1>Product Management</h1>
        <div className="create-section">
          <label>Name:</label>
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={newProduct.status} onChange={handleInputChange} />
        </div>
        <button className="create-button" onClick={handleCreate}>Create</button>
        <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      {editedProduct && (
        <div className="edit-section">
          <h2>Edit Product</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={editedProduct.image}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={editedProduct.image}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={editedProduct.category}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="text"
              name="status"
              value={editedProduct.status}
              onChange={handleInputChange}
            />
          </div>
          <button className="edit-button" onClick={handleSave}>Save</button>
          <button className="edit-button" onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
