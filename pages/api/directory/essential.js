// import nc from 'next-connect';
// // import bcrypt from 'bcryptjs';
// import axios from 'axios';
// // import config from '../../../utils/'
// // import { signToken } from '../../../utils/auth';


// const handler = nc();

// // function randomString(length, chars) {
// //     var result = '';
// //     for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
// //     return result;
// // }
// // document.write(randomaString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));


// // console.log(result, "something found")
// handler.post(async (req, res) => {
//   const projectId = config.projectId;
//   const dataset = config.dataset; 
//   const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
//   const createMutations = [
//     {
//       create: { 
//         _type: 'company',
//         name: req.body.name,
//         address: req.body.address,
//         city: req.body.city,
//         state: req.body.state,
//         category: req.body.category,
//         email: req.body.email,
//         phone: req.body.phone,
//         detail: req.body.detail,
//         demo: req.body.demo
      
      
        
//       },
//     },
//   ];

// //   if (existUser) {
// //     return res.status(401).send({ message: 'Email aleardy exists' });
// //   }
//   const { data } = await axios.post(
//     `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
//     { mutations: createMutations },
//     {
//       headers: {
//         'Content-type': 'applicaton/json',
//       'Authorization': `Bearer ${tokenWithWriteAccess}`,
//       },
//     }
//   );
//   const companyId = data.results[0].id;
//   const company = {
//     _id: companyId,
//     name: req.body.name,
//     address: req.body.address,
//     city: req.body.city,
//     state: req.body.state,
//     category: req.body.category,
//     email: req.body.email,
//     phone: req.body.phone,
//     detail: req.body.detail,
//     demo: req.body.demo

    
//   };
// //   const token = signToken(user);
//   res.send({ ...company });
// });

// export default handler;
