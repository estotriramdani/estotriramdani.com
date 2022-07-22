import type { NextApiRequest, NextApiResponse } from 'next';
import data from './posts.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json({ status: 'success', message: 'Downtime data fetched', data });
}
