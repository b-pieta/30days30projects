import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import mobileImageHero1 from '../assets/images/mobile-image-hero-1.jpg';
import desktopImageHero1 from '../assets/images/desktop-image-hero-1.jpg';
import mobileImageHero2 from '../assets/images/mobile-image-hero-2.jpg';
import desktopImageHero2 from '../assets/images/desktop-image-hero-2.jpg';
import mobileImageHero3 from '../assets/images/mobile-image-hero-3.jpg';
import desktopImageHero3 from '../assets/images/desktop-image-hero-3.jpg';

const products = [
	{
		id: 1,
		name: 'Product 1',
		price: '$99',
		mobileImg: mobileImageHero1,
		desktopImg: desktopImageHero1,
	},
	{
		id: 2,
		name: 'Product 2',
		price: '$199',
		mobileImg: mobileImageHero2,
		desktopImg: desktopImageHero2,
	},
	{
		id: 3,
		name: 'Product 3',
		price: '$299',
		mobileImg: mobileImageHero3,
		desktopImg: desktopImageHero3,
	},
	{
		id: 4,
		name: 'Product 4',
		price: '$399',
		mobileImg: mobileImageHero1,
		desktopImg: desktopImageHero1,
	},
	{
		id: 5,
		name: 'Product 5',
		price: '$499',
		mobileImg: mobileImageHero2,
		desktopImg: desktopImageHero2,
	},
	{
		id: 6,
		name: 'Product 6',
		price: '$599',
		mobileImg: mobileImageHero3,
		desktopImg: desktopImageHero3,
	},
];

function Shop() {
	return (
		<div className='flex flex-col min-h-screen bg-black py-10'>
			<div className='flex-grow'>
				<h2 className='text-2xl font-bold text-center mb-10 text-white'>
					Our Products
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 md:px-0'>
					{products.map((product) => (
						<div
							key={product.id}
							className='group relative overflow-hidden rounded-lg shadow-lg bg-white'
						>
							<picture className='block w-full h-auto transform group-hover:scale-110 transition-transform duration-300'>
								<source
									media='(min-width: 768px)'
									srcSet={product.desktopImg}
								/>
								<img src={product.mobileImg} alt={product.name} />
							</picture>
							<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex justify-center items-center'>
								<div className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center'>
									<FaShoppingCart className='mb-2 text-4xl' />
									<p className='text-lg font-bold'>{product.name}</p>
									<p className='mt-1'>{product.price}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Shop;
