import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        handleSearch();
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/prodName/${searchQuery}`);
      const products = response.data;
      setSearchResults(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ borderBottom: '1px solid #ccc', marginTop: '150px' }}>
        <input
          type="text"
          style={{
            width: '100%',
            height: '40px',
            border: 'none',
            fontSize: '16px',
            padding: '8px',
            outline: 'none',
          }}
          placeholder="Search for an item, colour, collection..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        {searchResults.map((product) => (
          <div key={product.id} className="product-container">
            <Link href={`/postDetailsPage?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`}>
              <div>
                <img
                  src={product.image}
                  alt="Product Image"
                  style={{ width: '232px', height: '348px', aspectRatio: '2/3' }}
                />
                <p className="product-info">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price} TND</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .product-container {
          flex-direction: column;
          align-items: center;
        }

        .product-info {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 10px; /* Adjust the margin value as needed */
        }

        .product-name {
          font-family: 'Neue Helvetica', Arial, sans-serif;
          font-size: 10px;
          margin-right: 150px;
        }

        .product-price {
          font-family: 'Neue Helvetica', Arial, sans-serif;
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default SearchPage;

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}
