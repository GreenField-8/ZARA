import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '../navbar/navbar';

const PostDetails: React.FC = () => {
  const router = useRouter();
  const sizes = ['S', 'M', 'L', 'XL'];
  const { id, name, price, image, description } = router.query;
  const productImage = typeof image === 'string' ? image : '';

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
        <Image src={productImage} alt="Product Image" width={300} height={400} />
      </div>

      <div className="product-details">
        <h2>{name}</h2>
        <p> {price} TND</p>
        <p>{description}</p>
        <ul>
          {sizes.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
        <button
                onClick={()=>{}}
                style={{
                  width: '13em',
                  height: '2.7em',
                  backgroundColor: 'white',
                  color: 'black',
                  marginTop: '13px',
                  cursor: 'pointer',
                  outline: 'none',
                  border: '1px solid black',
                  fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                  fontSize: '15px',
                }}
              >
                Add to bag
              </button>
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
          margin-top:150px;
          margin-left:50px
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