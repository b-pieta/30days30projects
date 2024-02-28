import React from 'react';
import aboutDark from '../assets/images/image-about-dark.jpg';
import aboutLight from '../assets/images/image-about-light.jpg';
import '../index.css';

function SectionTwo() {
	return (
		<>
			<section className='grid grid-cols-1 lg:grid-cols-3'>
				<article className='flex justify-center items-center overflow-hidden'>
					<img
						src={aboutDark}
						alt=''
						className='h-full w-full lg:max-w-full lg:max-h object-cover lg:-ml-20'
					/>
				</article>

				<article className='p-10 lg:p-2 mt-10'>
					<h2
						className='font-bold text-lg lg:text-xl uppercase'
						style={{ letterSpacing: '0.25rem' }}
					>
						About our furniture
					</h2>
					<p className='text-slate-900 text-l lg:text-base mt-2 mb-4 opacity-75'>
						Our multifunctional collection blends design and function to suit
						your individual taste. Make each room unique, or pick a cohesive
						theme that best express your interests and what inspires you. Find
						the furniture pieces you need, from traditional to contemporary
						styles or anything in between. Product specialists are available to
						help you create your dream space.
					</p>
				</article>

				<article className='flex justify-center items-center overflow-hidden'>
					<img
						src={aboutLight}
						alt=''
						className='w-full lg:max-w-full h-full lg:max-h object-cover lg:-mr-40 large-screen-translate'
					/>
				</article>
			</section>
		</>
	);
}

export default SectionTwo;
