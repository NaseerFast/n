// import nc from 'next-connect';

// const handler = nc();

// handler.get(async (req, res) => {


//   const categories = [
//       // "Shorts", "Electronics", "Cameras", "Televisions", "Books", "Fiction Books", "Exam Books", "Tshirt"


//      {
//          name:  "Electronics",
//          image: "/images/category-3.jpg",
//          value: "Electronics" ,
//          checked: false,
//         },
//      { 
//          name:"Cameras",
//          image: "/images/category-2.jpg",
//          value: "Cameras",
//          checked: false,
//      }, 
//     {
//          name:"Televisions",
//          image: "/images/category-3.jpg",
//          value: "Televisions",
//          checked: false,
//     },
       
//     {
//          name:"Boooks",
//          image:"/images/category-2.jpg",
//          value: "Books",
//          checked: false,
//     },
//     {
//          name:"Fiction Books",
//          image:"/images/category-3.jpg",
//          value:"Fiction Books",        checked: false,
//     },  
//      {
   
//          name:"Exam Books",
//          image:"/images/category-3.jpg",
//          value:"Exam Books",
//          checked: false,
//      },
//      {
//          name:  "Electronics",
//          image: "/images/category-3.jpg",
//          value: "Electronics" ,
//          checked: false,
//         },
//      { 
//          name:"Cameras",
//          image: "/images/category-2.jpg",
//          value: "Cameras",
//          checked: false,
//      }, 
//     {
//          name:"Televisions",
//          image: "/images/category-3.jpg",
//          value: "Televisions",
//          checked: false,
//     },
       
//     {
//          name:"Books",
//          image:"/images/category-2.jpg",
//          value: "Books",
//          checked: false,
//     },
//     {
//          name:"Fiction Books",
//          image:"/images/category-3.jpg",
//          value:"Fiction Books",
//     },  
//      {
   
//          name:"Exam Books",
//          image:"/images/category-3.jpg",
//          value:"Exam Books",
//      },
//       ]
   
//   res.send(categories);
// });

// export default handler;


// import nc from 'next-connect';
// import Product from '../../../models/Product';
// import db from '../../../utils/db';

// const handler = nc();

// handler.get(async (req, res) => {
//   await db.connect();
//   const categories = await Product.find().distinct('category');
//   await db.disconnect();
//   res.send(categories);
// });

// export default handler;
import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const categories = await Product.find().distinct('category');
  await db.disconnect();
  res.send(categories);
});

export default handler;