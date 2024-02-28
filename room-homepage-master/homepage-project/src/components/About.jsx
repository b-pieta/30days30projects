import React from 'react';
import desktopImageHero3 from '../assets/images/desktop-image-hero-3.jpg';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function AboutUsSection() {
	return (
		<div className='flex flex-col justify-center min-h-screen bg-black'>
			<section className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
				<div className='relative'>
					<img
						src={desktopImageHero3}
						alt='About Us'
						className='w-full h-full object-cover'
					/>
					<div className='absolute top-1/2 left-10 transform -translate-y-1/2 flex flex-col items-center'>
						<div
							className='flex flex-col items-center text-white text-6xl lg:text-7xl font-bold'
							style={{ lineHeight: '0.9' }}
						>
							<span>A</span>
							<span>B</span>
							<span>O</span>
							<span>U</span>
							<span>T</span>
						</div>
						<div
							style={{
								transform: 'translateY(-20%) translateX(100%)',
								display: 'flex',
								alignItems: 'flex-end',
							}}
						>
							<h1
								className='text-white text-6xl lg:text-7xl font-bold'
								style={{ lineHeight: '0.9' }}
							>
								U&nbsp;S
							</h1>
						</div>
					</div>
				</div>
				<div className='p-8 lg:p-12'>
					<h2 className='text-white text-4xl lg:text-6xl font-bold mb-4'>
						We build the future
					</h2>
					<p className='text-slate-50 opacity-75 mb-6'>
						Our furniture company has been at the forefront of innovative design
						and unparalleled quality for over a decade. We pride ourselves on
						crafting pieces that not only elevate spaces but also withstand the
						test of time. Our commitment to sustainability and excellence has
						made us a beloved brand among those who appreciate the finer things
						in life. From the drawing board to your home, every piece is made
						with you in mind, ensuring that it meets our high standards and your
						unique needs.
					</p>
					<div className='flex justify-end gap-4'>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Instagram'
						>
							<FaInstagram className='text-white text-2xl hover:text-gray-400' />
						</a>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Facebook'
						>
							<FaFacebookF className='text-white text-2xl hover:text-gray-400' />
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Twitter'
						>
							<FaTwitter className='text-white text-2xl hover:text-gray-400' />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutUsSection;
