import NextLink from 'next/link';
import ButtonPrimary from '../ButtonPrimary';


export default function Hero(){




	return(
		<div className="  overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('images/04.jpg')` }}>
			<section className=" text-neutral-900 md:text-gray-100 md:pt-24 md:pb-24">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24  lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-none ">Jobs,
				<span className="text-neutral-800"> Business Listing, </span> and Marketplace
			</h1>
			<p className="m-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula 
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<ButtonPrimary >Explore</ButtonPrimary>
				<ButtonPrimary >Tender</ButtonPrimary>
			</div>
		</div>
		<div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="images/dir_svg2.svg" alt="" className="object-contain h-52 sm:h-40 lg:h-56 xl:h-86 2xl:h-128"/>
		</div>
	</div>
</section>
		</div>
	)
}


