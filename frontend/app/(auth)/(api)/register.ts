// pages/api/users/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Replace with your actual backend URL
      const response = await axios.post('http://localhost:5000/api/auth/register', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.response?.data?.message || 'Registration failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
