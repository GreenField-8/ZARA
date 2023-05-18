import React from 'react';
import Image from 'next/image';
import test from '../public/assets/test.jpg'
import Navbar from './navbar/navbar';

const PostDetails: React.FC = () => {

  const sizes = ['S', 'M', 'L', 'XL'];
 const image = test
  return (
    <div className="post-details">
        <Navbar />
      <div className="composition-care">
        <h2>COMPOSITION & CARE</h2>
        <p>
          We work with monitoring programmes to ensure compliance with our social,
          environmental and health and safety standards for our garments.
        </p>
        <p>
          To assess compliance, we have developed a programme of audits and continuous
          improvement plans.
        </p>
      </div>

      <div className="image-container">
        <Image
          src={image}
          alt="Product Image"
          width={300}
          height={400}
        />
      </div>

      <div className="product-details">
        <h2>Title</h2>
        <p>Price: $19.99</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          {sizes.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
        <button>Add to Bag</button>
      </div>

      <style jsx>{`
        .post-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Neue Helvetica', Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.4px;
          font-weight: 300;
        }

        .composition-care {
          flex: 1;
        }

        .image-container {
          flex: 1;
          margin: 0 20px;
        }

        .product-details {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default PostDetails;
