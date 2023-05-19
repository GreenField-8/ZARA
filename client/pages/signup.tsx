import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface SignUpProps {
  onSwitchForm: () => void;
}

const Sign_Up: React.FC<SignUpProps> = ({ onSwitchForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/register', {
        name,
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

  const handleSignupClick = () => {
    router.push('/Login');
  };

  return (
    <div>
      <h1>Sign up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{' '}
        <button onClick={handleSignupClick}>Switch to Login</button>
      </p>
    </div>
  );
};

export default Sign_Up;
