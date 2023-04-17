
import Locations from '../components/BillboardLocations';
import { TopCompanies } from '../components/directory/FeeaturedBusinesses';
import FeaturedProducts from '../components/FeaturedProducts';
import NewJobs from '../components/jobportal/Jobs';
import Layout from '../components/product/layout/index';
import Product from '../models/Product';
import db from '../utils/db';
import SearvicesFeature from '../components/OurServices';
import Header from '../components/Header';
import {Box, useMediaQuery} from '@mui/material';
import JobListing from '../models/Jobs';
import Carousel from '../components/Carousel';
import Featured from '../components/NewCarousel';
import classes from '../utils/classes';
import Banner6 from '../components/sttorebanner';
import AdComponent from '../components/adcomponent';
import OurservicesFeature from '../components/OurServices-2';
import Banner from '../components/banner/banner'
import Hero from '../components/hero.js';
import Feature2 from '../components/Feature-2';
import NewHero from '../components/NewHero';


export default function Home({ products, latestjobs }) {
 
  // console.log(products)
  const isDesktop = useMediaQuery('(min-width:850px)');

  return (
    <Layout title="Home Page">
       <div className="">
      
       {/* <Featured /> */}
       <Hero />
       {/* <NewHero /> */}
       
    

      {/* <Box sx={isDesktop ? classes.hidden : classes.visible}>
       <Banner6 />
      </Box>  */}
       
       {/* <Banner /> */}
      <div className=" space-y-4">
        
      {/* <FeaturedProducts products={products}/> */}
        
      
      {/* <AdComponent /> */}
      {/* <TopCompanies /> */}
      <Feature2 />
      {/* <NewJobs latestjobs={latestjobs}/> */}
      <SearvicesFeature />
      {/* <OurservicesFeature /> */}
      <Locations />
      </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  const latestjobs = await JobListing.find().sort({_id:1}).limit(10).lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
      latestjobs: latestjobs.map(db.convertDocToObj)
      
    },
  };
}
