// frontend/pages/login.tsx
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Token:', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='text-black'>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className='text-white' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
