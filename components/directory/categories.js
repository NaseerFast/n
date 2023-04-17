import NextLink from 'next/link';



export default function Categories(){

  const categories = [
"Auto Accessories",
"Auto Dealers – New",
"Auto Dealers – Used",
"Detail & Carwash",
"Gas Stations",
"Motorcycle Sales & Repair",
"Rental & Leasing Service",
"Repair & Parts Towing",
"Consultants",
"Employment",
"Agency Marketing & Communications",
"Office Supplies",
"Printing & Publishing",
"Computer Programming & Support",
"Consumer Electronics & Accessories",
"Architects Landscape Architects Engineers & Surveyors",
"Blasting & Demolition",
"Building Materials & Supplies",
"Construction Companies",
"Electricians",
"Engineer Survey",
"Environmental Assessments",
"Inspectors Plaster & Concrete",
"Plumbers",
"Roofers",
"Early Childhood Education",
"Educational Resources",
"Other Educational",
"Artists",
"Writers",
"Event Planners & Supplies",
"Golf Courses",
"Movies",
"Productions",
"Desserts, Catering",
"Catering & Supplies",
"Fast Food & Carry Out Grocery",
"Beverage & Tobacco Restaurants",
"Acupuncture",
"Assisted Living & Home Health Care",
"Audiologist",
"Chiropractic",
"Clinics & Medical Centers",
"Dental",
"Diet I& Nutrition",
"Laboratory",
"Imaging & Diagnostic",
"Massage Therapy",
"Mental Health",
"Nurse Optical Pharmacy",
"Drug & Vitamin Stores",
"Physical Therapy",
"Physicians & Assistants",
"Podiatry",
"Social Worker",
"Animal Hospital Veterinary & Animal Surgeons",
"Antiques & Collectibles",
"Cleaning",
"Crafts",
"Hobbies & Sports",
"Flower Shops",
"Home Furnishings",
"Home Goods",
"Home Improvements & Repairs",
"Landscape & Lawn Service",
"Pest Control",
"Pool",
"Supplies & Service",
"Security System & Services",
"Accountants",
"Attorneys",
"Financial Institutions",
"Financial Services",
"Insurance",
"Other Legal",
"Distribution",
"Import/Export",
"Manufacturing",
"Wholesale",
"Cards & Gifts",
"Clothing & Accessories",
"Department Stores Sporting Goods",
"General",
"Jewelry",
"Shoes",



  ]


    return(

        <ul className="list ph3 ph5-ns pv4">
  {categories.map((item, i) => (
  <li key={i} className="dib mr1 mb2"> <NextLink href={`/directorysearch?category=hotel`} passHref><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">{item}</a></NextLink></li>

  ))}
</ul>

        );
}


 