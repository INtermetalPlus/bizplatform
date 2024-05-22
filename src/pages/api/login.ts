import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Replace with your API endpoint and method to obtain tokens
            const response = await axios.post('http://167.172.161.102:82/api/v1/authorization/', {
                email: req.body.email,
                password: req.body.password
            });

            const { access, refresh } = response.data;

            res.setHeader('Set-Cookie', [
                `accessToken=${access}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`, // Expires in 1 hour
                `refreshToken=${refresh}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict` // Expires in 1 week
            ]);
            res.status(200).json({ message: 'Authentication successful' });
        } catch (error:any) {
            res.status(401).json({ message: 'Authentication failed', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
