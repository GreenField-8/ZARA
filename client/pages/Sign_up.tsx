import React, { useState } from 'react';
import axios from 'axios';

const Sign_up: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http:localhost:7000/api/register', {
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
    </div>
  );
};

export default Sign_up;
