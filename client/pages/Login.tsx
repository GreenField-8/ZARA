import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface LoginProps {
  onSwitchForm: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchForm }) => {
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
    router.push('/Sign_Up');
    console.log('aaa');
    
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{' '}
        <button onClick={handleLoginClick}>Switch to Sign up</button>
      </p>
    </div>
  );
};

export default Login;
