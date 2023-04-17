import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {


  const categories = [
  


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

      ]
   
  res.send(categories);
});

export default handler;


