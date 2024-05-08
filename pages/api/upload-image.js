import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { image } = req.body;

    // Save image to /public/images folder
    const imagePath = path.join(process.cwd(), 'public', 'images', req.query.fileName as string);
    fs.writeFileSync(imagePath, Buffer.from(image, 'base64'));

    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
