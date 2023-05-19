import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../navbar/navbar';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const WomenPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Replace with your API endpoint or database query

        if (response.ok) {
          const data = await response.json();
          setProducts(data.products); // Update the products array with the fetched data
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {/* Display the input for filtering options */}
        <input type="text" placeholder="Search" />
      </div>
      <div>
        {/* Display the products */}
        {products.map((product) => (
          <div key={product.id}>
            {/* Display the product image */}
            <Image src={product.image} alt={product.name} width={300} height={200} />
            {/* Display the product price */}
            <p>{product.price}</p>
            {/* Display the product name */}
            <p>{product.name}</p>
            {/* Display the "Add to Cart" button */}
            <Link href={`/product/${product.id}`}>
              <span>Add to Cart</span>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .Main_women_tri {
          width: 90vw;
          /* border: 1px solid blue; */
          margin: auto;
          margin-top: 3%;
        }

        .render_data_women {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          /* border: 1px solid red; */
          width: 100%;
          margin: auto;
        }

        .women_image {
          width: 100%;
        }

        .span_div {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
};

export default WomenPage;
