import React,{useState, useEffect, } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';
import { getError } from "../utils/error";
import { toast } from "react-toastify";
// import { useSnackbar } from 'notistack';

const topCompaniesItems = [
  {
    companyName: "Rempel and Sons",
    category: "Media & Marketing",
    image: "/images/08.jpg",
    logo: "/images/logo.jpg",
    slug:"rempel-and-sons",
    value : "hotel"
  },
  {
    companyName: "Dietrich, Beahan and Connelly",
    category: "Hotel",
    image: "/images/09.jpg",
    logo: "/images/logo.jpg",
    slug: "dietrich-beahan-and-connely",
    value : "hotel"
  },
  {
    companyName: "Gutmann LLC",
    category: "Oil & Gas",
    image: "/images/10.jpg",
    logo: "/images/logo.jpg",
    slug: "gutmann-llc",
    value : "hotel"
  },
  {
    companyName: "Kerluke Group",
    category: "Accounting",
    image: "/images/11.jpg",
    logo: "/images/logo.jpg",
    slug: "kerluke-group",
    value : "hotel"
  },
  {
    companyName: "Hahn LLC",
    category: "Food & Beverage",
    image: "/images/12.jpg",
    logo: "/images/logo.jpg",
    slug: "Hahn-llc",
    value : "hotel"
  },
  {
    companyName: "Ziemann, Nicolas and Grady",
    category: "Construction",
    image: "/images/04.jpg",
    logo: "/images/logo.jpg",
    slug: "Ziemann-nicolas-and-Grady",
    value : "hotel"
  },
];

export const TopCompanies = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/directory/categories`);
      setCategories(data);
    } catch (err) {
      toast.error(getError(err), { variant: 'error' });
    }
  };

  // fetchCategories();





  // const { enqueueSnackbar } = useSnackbar();
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/companies/categories`);
  //       setCategories(data);
  //     } catch (err) {
  //       enqueueSnackbar(getError(err), { variant: 'error' });
  //     }
  //   };
  //   fetchCategories();
  // }, [enqueueSnackbar]);
  // console.log(categories);
  return (
    <section id="top-companies" className="px-8 md:px-16">
      <div className="my-8 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white ">Poular Categories</h2>
       <div className="border border-slate-300 py-1 px-4 rounded-full text-gray-500">show all</div>
      </div>

      <div
        id="top-companies__items"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {topCompaniesItems.map((item, i) => (
           <NextLink key={i} href={`/directorysearch?category=${item.value}`} passHref  >
<a className="group block overflow-hidden rounded-2xl border border-neutral-800   transition-all duration-150 hover:-translate-y-1  ">
              <div className="relative block overflow-hidden  pt-[70%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-200 group-hover:scale-[102%]"
                />
              </div>

              <div className="relative flex flex-col border-t p-4 bg-neutral-900 ">
                <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg  shadow-sm ">
                  <div className="relative block overflow-hidden  bg-slate-200 pt-[100%]">
                    <Image
                      src='/images/logo.jpg'
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </span>

                <h5 className="block truncate text-xl font-semibold capitalize text-white">
                  {item.name}
                </h5>
                <span className="block truncate text-slate-500  ">
                  {item.category}
                </span>
              </div>
            </a></NextLink>
        ))}
      </div>
    </section>
  );
};