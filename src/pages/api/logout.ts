import { NextApiRequest, NextApiResponse } from "next";

export default function logoutHandler(req:NextApiRequest, res:NextApiResponse) {
    // Clear cookies
    res.setHeader('Set-Cookie', [
      'accessToken=; HttpOnly; Path=/; Max-Age=0',
      'refreshToken=; HttpOnly; Path=/; Max-Age=0',
    ]);
  
    res.status(200).json({ message: 'Logout successful' });
  }
  