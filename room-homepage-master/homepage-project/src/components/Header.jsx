import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className='absolute z-10 p-8 w-full flex items-center justify-center lg:items-center lg:justify-start'>
				<div>
					<img src={logo} alt='' className='lg:mr-8' />
				</div>

				<div
					className={`${
						isOpen
							? 'bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen'
							: 'bg-transparent lg:bg-transparent'
					} lg:bg-transparent lg:h-auto lg:relative`}
				>
					<nav
						className={`${isOpen ? 'open w-full py-8 lg:py-0 lg:w-auto' : ''}`}
					>
						<ul className='flex items-center justify-center flex-wrap gap-4'>
							<li>
								<Link
									to='/'
									className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'
								>
									home
								</Link>
							</li>
							<li>
								<Link
									to='/shop'
									className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'
								>
									shop
								</Link>
							</li>
							<li>
								<Link
									to='/about'
									className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'
								>
									about
								</Link>
							</li>
							<li>
								<Link
									to='/contact'
									className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'
								>
									contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className='absolute left-8 top-8 z-20 lg:hidden'>
					{isOpen ? (
						<button onClick={() => setIsOpen(false)}>
							<img src={close} alt='' />
						</button>
					) : (
						<button onClick={() => setIsOpen(true)}>
							<img src={menu} alt='' />
						</button>
					)}
				</div>
			</header>
		</>
	);
}
