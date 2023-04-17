// import React, {useState, useEffect} from 'react'
// import filterSearch from '../utils/filterSearch'
// // import {getData} from '../utils/fetchData'
// import {useRouter} from 'next/router'

// const Filter = ({state}) => {
//     const [search, setSearch] = useState('')
//     const [sort, setSort] = useState('')
//     const [category, setCategory] = useState('')

//     // const {categories} = state

//     const storecategories =
//     [
//         {
//             name:  "Shorts",
//             image: "/images/category-3.jpg",
//             value: "Shorts" ,
//             url: 'false',
//            },
//         { 
//             name:"Tshirt",
//             image: "/images/category-2.jpg",
//             value: "Tshirt",
//             checked: false,
//         }, 
//        {
//             name:"Televisions",
//             image: "/images/category-3.jpg",
//             value: "Televisions",
//             checked: false,
//        },
           
//        {
//             name:"Books",
//             image:"/images/category-2.jpg",
//             value: "Books",
//             checked: false,
//        },
//        {
//             name:"Fiction Books",
//             image:"/images/category-3.jpg",
//             value:"Fiction Books",
//             checked: false,
//        },  
//         {
       
//             name:"Exam Books",
//             image:"/images/category-3.jpg",
//             value:"Exam Books",
//             checked: false,
//         },
//         {
//             name:  "Electronics",
//             image: "/images/category-3.jpg",
//             value: "Electronics" ,
//             checked: false,
//            },
//         { 
//             name:"Cameras",
//             image: "/images/category-2.jpg",
//             value: "Cameras",
//             checked: false,
//         }, 
//        {
//             name:"Televisions",
//             image: "/images/category-3.jpg",
//             value: "Televisions",
//             checked: false,
//        },
           
//        {
//             name:"Books",
//             image:"/images/category-2.jpg",
//             value: "Books",
//             checked: false,
//        },
//        {
//             name:"Fiction Books",
//             image:"/images/category-3.jpg",
//             value:"Fiction Books",
//        },  
//         {
       
//             name:"Exam Books",
//             image:"/images/category-3.jpg",
//             value:"Exam Books",
//         },
//     ]

//     const router = useRouter()


//     const handleCategory = (e) => {
//         setCategory(e.target.value)
//         filterSearch({router, category: e.target.value})
//     }

//     const handleSort = (e) => {
//         setSort(e.target.value)
//         filterSearch({router, sort: e.target.value})
//     }

//     // useEffect(() => {
//     //     filterSearch({router, search: search ? search.toLowerCase() : 'all'})
//     // },[search])

//     return (
//         <div className="flex bg-red-300 space-x-8">
//             <div className="input-group-prepend col-md-2 px-0 mt-2">
//                 <select className="custom-select text-capitalize"
//                 value={category} onChange={handleCategory}>

//                     <option value="all">All Products</option>

//                     {
//                         storecategories.map(item => (
//                             <option key={item._id} value={item._id}>{item.name}</option>
//                         ))
//                     }
//                 </select>
//             </div>

//             <form autoComplete="off" className="mt-2 col-md-8 px-0">
//                 <input type="text" className="form-control" list="title_product"
//                 value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} />
//             </form>

//             <div className="input-group-prepend col-md-2 px-0 mt-2">
//                 <select className="custom-select text-capitalize"
//                 value={sort} onChange={handleSort}>

//                      <option value="-createdAt">Newest</option>
//                      <option value="oldest">Oldest</option>
//                      <option value="-sold">Best sales</option>
//                      <option value="-price">Price: Hight-Low</option>
//                      <option value="price">Price: Low-Hight</option>

//                 </select>
//             </div>


//         </div>
//     )
// }

// export default Filter