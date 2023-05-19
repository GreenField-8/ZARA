import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <div style={{ borderBottom: '1px solid #ccc' }}>
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
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        {searchResults.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={product.image} alt="Product Image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

interface Product {
  id: number;
  name: string;
  image: string;
}
