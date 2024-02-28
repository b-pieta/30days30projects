import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/icon-arrow.svg';
import mobileImageHero1 from '../assets/images/mobile-image-hero-1.jpg';
import desktopImageHero1 from '../assets/images/desktop-image-hero-1.jpg';
import mobileImageHero2 from '../assets/images/mobile-image-hero-2.jpg';
import desktopImageHero2 from '../assets/images/desktop-image-hero-2.jpg';
import mobileImageHero3 from '../assets/images/mobile-image-hero-3.jpg';
import desktopImageHero3 from '../assets/images/desktop-image-hero-3.jpg';
import left from '../assets/images/icon-angle-left.svg';
import right from '../assets/images/icon-angle-right.svg';

const data = [
	{
		id: 1,
		title: 'Discover innovative ways to decorate',
		desc: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
		mobile: mobileImageHero1,
		desktop: desktopImageHero1,
	},
	{
		id: 2,
		title: 'We are available all across the globe',
		desc: ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
		mobile: mobileImageHero2,
		desktop: desktopImageHero2,
	},
	{
		id: 3,
		title: 'Manufactured with the best materials',
		desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
		mobile: mobileImageHero3,
		desktop: desktopImageHero3,
	},
];

export default function Showcase() {
	const [items] = useState(data);
	const [slideIndex, setSlideIndex] = useState(1);

	function nextSlide() {
		if (slideIndex !== items.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === items.length) {
			setSlideIndex(1);
		}
	}

	function previousSlide() {
		if (slideIndex > 1) {
			setSlideIndex(slideIndex - 1);
		} else {
			setSlideIndex(items.length);
		}
	}

	return (
		<>
			<section>
				{items.map((item, index) => (
					<article
						className={
							slideIndex === index + 1
								? 'grid grid-cols-1 lg:grid-cols-[3fr,2fr] '
								: 'hidden'
						}
						key={item.id}
					>
						<div className='relative'>
							<picture>
								<source media='(min-width: 768px)' srcSet={item.desktop} />
								<img src={item.mobile} alt={item.title} className='w-full' />
							</picture>

							<ul className='absolute -bottom-2 -right-0 flex lg:right-[-156px]'>
								<li>
									<button
										onClick={previousSlide}
										className='bg-black hover:bg-neutral-700 transition-all-duration-200'
									>
										<img src={left} alt='' className='p-8' />
									</button>
								</li>
								<li>
									<button
										onClick={nextSlide}
										className='bg-black hover:bg-neutral-700 transition-all-duration-200'
									>
										<img src={right} alt='' className='p-8' />
									</button>
								</li>
							</ul>
						</div>

						<div className='p-8 lg:p-12 ml-10'>
							<h1 className='text-slate-900 text-3xl lg:text-5xl font-bold mt-20'>
								{item.title}
							</h1>
							<p className='text-slate-900 opacity-75 my-6'>{item.desc}</p>
							<Link
								to='/shop' 
								className='flex items-center gap-4 uppercase hover:opacity-75 font-bold'
								style={{ letterSpacing: '0.7rem' }}
							>
								Shop Now <img src={arrow} alt='Arrow' />
							</Link>
						</div>
					</article>
				))}
			</section>
		</>
	);
}
