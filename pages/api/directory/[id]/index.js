// /api/orders/:id
import { getSession } from 'next-auth/react';
import Listing from '../../../../models/Listing';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  await db.connect();

  const listing = await Listing.findById(req.query.id);
  await db.disconnect();
  res.send(listing);
};

export default handler;
