
import Image from "next/image";
import NextLink from "next/link";


// import { toast } from 'react-toastify';
// import { useSnackbar } from 'notistack';

const featuredBusinesses = [
  {
    companyName: "Rempel and Sons",
    category: "Media & Marketing",
    image: "/images/08.jpg",
    logo: "/images/logo.jpg",
    slug:"rempel-and-sons"
  },
  {
    companyName: "Dietrich, Beahan and Connelly",
    category: "Tourism",
    image: "/images/09.jpg",
    logo: "/images/logo.jpg",
    slug: "dietrich-beahan-and-connely"
  },
  {
    companyName: "Gutmann LLC",
    category: "Oil & Gas",
    image: "/images/10.jpg",
    logo: "/images/logo.jpg",
    slug: "gutmann-llc"
  },
  {
    companyName: "Kerluke Group",
    category: "Accounting",
    image: "/images/11.jpg",
    logo: "/images/logo.jpg",
    slug: "kerluke-group"
  },
  {
    companyName: "Hahn LLC",
    category: "Food & Beverage",
    image: "/images/12.jpg",
    logo: "/images/logo.jpg",
    slug: "Hahn-llc"
  },
  {
    companyName: "Ziemann, Nicolas and Grady",
    category: "Construction",
    image: "/images/04.jpg",
    logo: "/images/logo.jpg",
    slug: "Ziemann-nicolas-and-Grady"
  },
];

export const TopCompanies = () => {

  // const { enqueueSnackbar } = useSnackbar();
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/companies/categories`);
  //       setCategories(data);
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };
  //   fetchCategories();
  // });
  // console.log(categories);
  return (
    <section id="top-companies">
      <div className="my-8 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white ">Top Categories</h2>
       {/* <div className="border border-neutral-800 py-1 px-4 rounded-full text-gray-500">show all</div> */}
      </div>

      <div
        id="top-companies__items"
        className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featuredBusinesses.map((item, i) => (
           <NextLink key={i} href={`/directory/search?category=${item.category}`} passHref  ><a className="group block overflow-hidden rounded-2xl border border-neutral-800   transition-all duration-150 hover:-translate-y-1  ">
              <div className="relative block overflow-hidden  pt-[70%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-200 group-hover:scale-[102%]"
                />
              </div>

              <div className="relative flex flex-col  p-4 bg-neutral-900 ">
                {/* <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg  shadow-sm ">
                  <div className="relative block overflow-hidden  bg-slate-200 pt-[100%]">
                    <Image
                      src='/images/1.png'
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </span> */}

                <h5 className="block truncate text-lg md:text-xl font-semibold capitalize text-white">
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