import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar/navbar';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        console.error('Email or password cannot be empty.');
        return;
      }

      const response = await axios.post('http://localhost:7000/api/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleLoginClick = () => {
    router.push('/signup');
  };

  const handleRegisterClick = () => {
    handleLoginClick();
  };
  return (
    <>
      <Navbar />

      <div
        id="logindiv"
        style={{
          width: '70%',
          height: '100%',
          paddingTop: '210px',
          display: 'flex',
          gap: '3%',
        }}
      >
        <div
          id="log"
          style={{
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          <section>
            <h3
              id="login"
              style={{
                marginBottom: '12px',
                marginTop: '20px',
                fontWeight: '600',
                fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                fontSize: '14px',
              }}
            >
              LOG IN TO YOUR ACCOUNT
            </h3>
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
                  type="email"
                  id="inputEmail"
                  onClick={handleLogin}
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
                  id="inputPasswd"
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
              <p
                className="size6"
                style={{
                  fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                  fontSize: '9px',
                  marginTop: '10px',
                  color: 'grey',
                  textAlign: 'center',
                }}
              >
                HAVE YOU FORGOTTEN YOUR PASSWORD?
              </p>
              <div
                id="logbttn"
                style={{
                  marginTop: '45px',
                }}
              >
                <button
                  id="signin"
                  className="login-btn"
                  onClick={handleLogin}
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
                  LOG IN
                </button>
              </div>
            </form>
          </section>
        </div>
        <div
          id="reg"
          style={{
            width: '70%',
            height: '100%',
          }}
        >
          <section>
            <h3
              id="register"
              style={{
                marginBottom: '12px',
                fontWeight: '600',
                fontFamily: 'Neue Helvetica, Arial, Helvetica, sans-serif',
                fontSize: '14px',
              }}
            >
              NEED AN ACCOUNT?
            </h3>
            <div
              id="bttn"
              style={{
                marginTop: '20px',
              }}
            >
              <button
                onClick={handleRegisterClick}
                style={{
                  width: '19em',
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
                REGISTER
              </button>
            </div>
          </section>
        </div>
      </div>

      <div id="footer"></div>

      <div id="ending"></div>
    </>
  );
};

export default Login;
