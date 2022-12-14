// /api/new-meetup

import clientPromise from '../../lib/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await clientPromise;
    const db = client.db('meetups');
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    res.status(201).json({ message: 'Meetup created!' });
  }
}

export default handler;
