// frontend/pages/api/users/login.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Login failed', error: error.message });
    }
  }
}
