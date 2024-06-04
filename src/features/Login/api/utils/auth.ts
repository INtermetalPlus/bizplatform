// utils/auth.js
import jwt from 'jsonwebtoken';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';


const SECRET_KEY = 'your_secret_key';

export const verifyToken = async (token:any) => {
  return jwt.verify(token, SECRET_KEY);
};

export const refreshToken = async (refreshToken:string | RequestCookie) => {
  const response = await fetch('http://167.172.161.102:82/api/v1/authorization/token/refresh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh:refreshToken }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return response.json();
};
