import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar';

interface Post {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductsByCategory = () => {
  const router = useRouter();
  const category = 'men-athleticz';
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/prodCategory/men-athleticz');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId: number) => {
    router.push(`/postdetails/${postId}`);
  };

  return (
    <div className="page-container">
      <Navbar />

      <div className="list-container">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <img src={post.image} alt={post.name} onClick={() => handlePostClick(post.id)} />
            <div className="post-info">
              <div className="post-name" onClick={() => handlePostClick(post.id)}>
                {post.name}
              </div>
              <div className="post-price">{post.price}TND</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Neue Helvetica', Arial, sans-serif;
        }

        .list-container {
          margin-top: 50px; /* Adjust the margin value as needed */
        }

        .post-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .post-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 10px; /* Adjust the margin value as needed */
        }

        .post-name {
          font-family: 'Neue Helvetica', Arial, sans-serif;
          cursor: pointer;
          font-size: 10px;
          position: unset
        }

        .post-price {
          font-family: 'Neue Helvetica', Arial, sans-serif;
          font-size: 10px;
          position: unset
        }
      `}</style>
    </div>
  );
};

export default ProductsByCategory;
