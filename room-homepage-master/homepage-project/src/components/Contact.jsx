import React from 'react';

function ContactSection() {
	return (
		<div className='flex items-center justify-center min-h-screen bg-black'>
			<section className='w-full max-w-2xl mx-auto p-5 bg-white rounded-lg shadow-lg px-4 sm:px-6 lg:px-20'>
				<div className='text-center'>
					<h1 className='text-gray-800 text-4xl lg:text-5xl font-bold mb-4'>
						Contact Us
					</h1>
					<p className='text-black text-lg lg:text-xl mb-8'>
						We're here to help and answer any question you might have. We look
						forward to hearing from you.
					</p>
					<div className='space-y-4'>
						<div>
							<label htmlFor='name' className='text-black font-bold block'>
								Name
							</label>
							<input
								type='text'
								id='name'
								className='mt-2 p-2 w-full border border-gray-500 rounded-md'
								placeholder='Your Name'
							/>
						</div>
						<div>
							<label htmlFor='email' className='text-black font-bold block'>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='mt-2 p-2 w-full border border-gray-500 rounded-md'
								placeholder='Your Email'
							/>
						</div>
						<div>
							<label htmlFor='message' className='text-black font-bold block'>
								Message
							</label>
							<textarea
								id='message'
								className='mt-2 p-2 w-full border border-gray-500 rounded-md'
								placeholder='Your Message'
								rows='4'
							></textarea>
						</div>
						<button className='mt-4 px-6 py-2 bg-black text-white font-bold rounded-md hover:bg-gray-700'>
							Send Message
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ContactSection;
