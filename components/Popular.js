import { Tooltip } from '@mui/material';
import Image from 'next/image'
// import ProductImg from '/public/images/p2.jpg'
import NextLink from 'next/link'




export default function BestOffer(){
  const onsale = [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      procode: '4336443',
      image: '/images/2477.jpg',
      price: 70,
      brand: 'Nike',
      color: 'brown',
      details:'It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.',
      rating: 4,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },

    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/2399.jpg',
      procode: '4336443',
      price: 70,
      brand: 'Nike',
      color: 'brown',
      details:'It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.',
      rating: 4,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/2477.jpg',
      procode: '4336443',
      price: 70,
      brand: 'Nike',
      color: 'brown',
      details:'It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.',
      rating: 4,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
      {
        name: 'Free Shirt',
        slug: 'free-shirt',
        category: 'Shirts',
        procode: '4336443',
        image: '/images/2399.jpg',
        price: 70,
        brand: 'Nike',
        color: 'brown',
        details:'It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.',
        rating: 4,
        numReviews: 8,
        countInStock: 20,
        description: 'A popular shirt',
      },
      {
        name: 'Free Shirt',
        slug: 'free-shirt',
        category: 'Shirts',
        image: '/images/2477.jpg',
        procode: '4336443',
        price: 70,
        brand: 'Nike',
        color: 'brown',
        details:'It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.',
        rating: 4,
        numReviews: 8,
        countInStock: 20,
        description: 'A popular shirt',
      },
]
    
 return (
        <>
         <div className=" border border-slate-800 my-5 px-2  md:px-6 pt-5 pb-6 bg-neutral-900 text-white ">
         <p className="text-2xl mb-8 font-semibold leading-7 xl:leading-9   text-gray-500">Best Offer</p>
         


 <div className=" inline-flex grid grid-cols-2 md:grid-cols-5  gap-x-1 gap-y-3 xl:gap-x-4 ">

 {onsale.map((onsaleitem, i) => (
  <div key={i}>
                <NextLink href={`/product/${onsaleitem.slug}`} passHref>
           
            <div   >
             <div className="relative w-full   overflow-hidden  hover:opacity-75  "> 
  <img src={onsaleitem.image} alt="sert"/>
  {/* <div className=" absolute bg-red-400 text-white text-xs md:py-1 md:px-2  top-0 rounded-xs">- N50 </div> */}
  <p className="text-center font-semibold text-xs md:text-sm">{onsaleitem.name}</p>
  <p className="text-center font-semibold text-xs md:text-sm">N 12,300</p>
  <p className="text-center font-semibold text-xs md:text-sm space-x-2 ">
    <span className="line-through">N 13,300</span>
    <span className="bg-red-600 px-1 text-xs rounded-sm">- 50% </span>
    </p>
  </div>
              
            </div>
         

            </NextLink>
            </div>
          ))}

  

  {/*  */}

 </div>
           
 

       
          
              

           
        </div>

        </>
    );
}