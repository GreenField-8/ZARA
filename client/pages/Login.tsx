import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/login', {
        email,
        password,
      });
      console.log(response.data);
      // Handle success or redirect to another page
    } catch (error: any) {
      console.error(error.response.data);
      // Handle error
    }
  };

  const handleLoginClick = () => {
    router.push('/signup');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ marginTop: '0', marginBottom: '20px', fontSize: '24px', textAlign: 'center' }}>Login to Your Account</h1>
      <input
        style={{ width: '100%', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ width: '100%', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer' }}
        onClick={handleLogin}
      >
        Login
      </button>
      <p>
        Don't have an account?{' '}
        <button
          style={{ backgroundColor: 'transparent', border: 'none', color: '#007bff', fontSize: '14px', cursor: 'pointer' }}
          onClick={handleLoginClick}
        >
          Switch to Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
