import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar/navbar';

const Sign_Up: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
      router.push('/login');
    } catch (error: any) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        id="authdiv"
        style={{
          width: '70%',
          height: '100%',
          paddingTop: '210px',
          display: 'flex',
          gap: '3%',
        }}
      >
        <div
          id="auth"
          style={{
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          <section>
            <h1
              id="auth"
              style={{
                marginBottom: '12px',
                marginTop: '0px',
                fontWeight: '600',
                fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                fontSize: '30px',
              }}
            >
              Personal details
            </h1>
            <form
              id="form"
              style={{
                width: '100%',
              }}
            >
              <div
                id="ep"
                style={{
                  marginBottom: '10%',
                }}
              >
                <input
                  type="text"
                  id="inputName"
                  placeholder="NAME"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    border: '0',
                    borderBottom: '1px solid gray',
                    width: '100%',
                    height: '30px',
                    fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                  }}
                />
                <br />
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="E-MAIL"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: '0',
                    borderBottom: '1px solid gray',
                    width: '100%',
                    height: '30px',
                    fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                  }}
                />
                <br />
                <input
                  type="password"
                  id="inputPassword"
                  placeholder="PASSWORD"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    border: '0',
                    borderBottom: '1px solid gray',
                    width: '100%',
                    height: '30px',
                    fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                  }}
                />
              </div>
              <div
                id="authbttn"
                style={{
                  marginTop: '45px',
                }}
              >
                <button
                  id="authb"
                  className="auth-btn"
                  onClick={handleRegister}
                  style={{
                    width: '19em',
                    height: '2.7em',
                    backgroundColor: 'black',
                    color: 'white',
                    marginTop: '13px',
                    cursor: 'pointer',
                    outline: 'none',
                    border: 'none',
                    fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                  }}
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </section>
        </div>
      </div>
      <div id="footer"></div>
      <div id="ending"></div>
    </>
  );
};

export default Sign_Up;