import { NextApiRequest, NextApiResponse } from 'next';

export default async function refreshHandler(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: 'No refresh token' });
  }

  // Call your backend API to refresh tokens
  const response = await fetch('https://your-backend.com/api/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: 'Failed to refresh token' });
  }

  const { accessToken, newRefreshToken } = await response.json();

  // Set new tokens in HttpOnly cookies
  res.setHeader('Set-Cookie', [
    `accessToken=${accessToken}; HttpOnly; Path=/; Max-Age=3600`, // 1 hour
    `refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=2592000`, // 30 days
  ]);

  res.status(200).json({ message: 'Token refreshed' });
}
