// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './downtime-data.json';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json({ status: 'success', message: 'Downtime data fetched', data });
}
