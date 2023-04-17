import NextLink from 'next/link';



export default function Categories(){

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


    return(

        <ul className="list ph3 ph5-ns pv4">
  {categories.map((item, i) => (
  <li className="dib mr1 mb2" key={i}> <NextLink href={`/directorysearch?category=hotel`} passHref><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">{item}</a></NextLink></li>

  ))}
</ul>

        );
}


 