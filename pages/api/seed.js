// import Product from '../../models/Product,js';
import Product from '../../models/Product';
import User from '../../models/User';
import Listing from '../../models/Listing';
import JobListing from '../../models/Jobs';
import TenderListing from '../../models/Tender';
import productdata from '../../utils/productsdata';
import tenderdata from '../../utils/tenderdata';
import jobdata from '../../utils/jobsdata';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  // await User.insertMany(data.users);
  // await Product.deleteMany();
  // await Product.insertMany(productdata.products);
  // await JobListing.deleteMany();
  // await JobListing.insertMany(jobdata.jobs);
  await Listing.deleteMany();
  await Listing.insertMany(data.listings);
  // await TenderListing.deleteMany();
  // await TenderListing.insertMany(tenderdata.listings);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
 