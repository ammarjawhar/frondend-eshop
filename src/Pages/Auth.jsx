import './css/Auth.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext';
const Auth = () => {
  const [state, setState] = useState('login');
  const { BASE_URL } = useContext(ShopContext);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmite = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${BASE_URL}/api/user/${state}`, userData, {
      withCredentials: true,
    });

    if (res.data.success) {
      alert(res.data.message);
      localStorage.setItem('Auth-Token', res.data.token);
      window.location.replace('/');
    }

    if (res.data.error) {
      alert(res.data.message);
    }
  };

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>{state}</h1>
        <form className="login-signup-form" onSubmit={handleSubmite}>
          {state === 'register' ? (
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your username"
              required
              onChange={handleChange}
              value={userData.name}
              autoComplete="on"
            />
          ) : null}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
            value={userData.email}
            autoComplete="on"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
            value={userData.password}
            autoComplete="off"
          />
          <button>{state}</button>
        </form>
        {state === 'register' ? (
          <p onClick={() => setState('login')}>
            Already have an account ?
            <span> {state === 'register' ? 'login' : 'register'} Here</span>
          </p>
        ) : (
          <p onClick={() => setState('register')}>
            Don't have an account ?{' '}
            <span>{state === 'login' ? 'register' : 'login'} Here</span>
          </p>
        )}

        <div className="agree">
          <input type="checkbox" name="agree" id="agree" required />
          <label htmlFor="agree"> I agree with terms and conditions</label>
        </div>
      </div>
    </div>
  );
};

export default Auth;
