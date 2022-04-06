import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/providers';
import { loginUser } from '../../utils';

const initLoginState = {
  email: '',
  password: ''
};

const LoginCard = () => {
  const [userData, setUserData] = useState(initLoginState);

  const { authDispatch } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form
      style={{ margin: 'auto', backgroundColor: '#090b13' }}
      className="h=96 w-96 p-10 shadow-2xl rounded-2xl">
      <h3 className="text-2xl font-normal text-center text-white mb-20">Login</h3>

      <div className="mb-5">
        <div className="input-container text-white">
          <input
            type="text"
            id="email"
            name="email"
            className="input-outlined input-outlined-amber"
            placeholder=" "
            value={userData.email}
            onChange={handleChange}
          />
          <label style={{ backgroundColor: '#0000227c' }} for="email" className="input-label">
            Email *
          </label>
        </div>
      </div>

      <div className="mb-5">
        <div className="input-container text-white">
          <input
            type="text"
            id="password"
            className="input-outlined input-outlined-amber"
            placeholder=" "
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <label style={{ backgroundColor: '#0000227c' }} for="password" className="input-label">
            Password *
          </label>
        </div>
      </div>

      <div className="flex justify-between mb-10">
        <Link to="/signup" className="btn btn-link-amber text-white" style={{ padding: 0 }}>
          Sign Up ?
        </Link>

        <Link to="/" className="btn btn-link-amber text-white mb-5 pl-0" style={{ padding: 0 }}>
          Forgot Password ?
        </Link>
      </div>

      <button
        style={{ background: 'transparent' }}
        className="btn btn-outline-amber justify-center w-full text-white mb-5"
        onClick={(e) => {
          e.preventDefault();

          setUserData({
            email: 'johndoe@gmail.com',
            password: '123456'
          });

          loginUser(
            {
              email: 'johndoe@gmail.com',
              password: '123456'
            },
            authDispatch,
            navigate
          );
        }}>
        Login With Test Credentials
      </button>

      <button
        type="submit"
        className="btn btn-solid-amber justify-center w-full text-white"
        onClick={(e) => {
          e.preventDefault();
          loginUser(userData, authDispatch, navigate);
        }}>
        Login
      </button>
    </form>
  );
};

export default LoginCard;
