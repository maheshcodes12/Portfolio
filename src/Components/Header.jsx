import React from "react";

const Header = () => {
	return (
		<div className='z-10 fixed top-12 left-24 flex flex-col justify-between h-[85vh]'>
			<div className='cursor-pointer'>
				<div className='bg-[#61892F] border rounded-full p-2 pb-3 flex justify-center items-center hover:bg-white'>
					<img
						width={40}
						src='High_quality_photo_of_a_monkey_astronaut.png'
						alt='Astronaut'
					/>
				</div>
			</div>

			<div className='flex-col gap-8 bottom-10 cursor-pointer mt-auto hidden sm:flex'>
				<a
					href='https://www.linkedin.com/in/mahesh-suryawanshi-768905257/'
					target='_blank'
					rel='noopener noreferrer'>
					<div>
						<i className='fab fa-linkedin-in fa-2xl text-[#61892F]  hover:text-white'></i>
					</div>
				</a>
				<a
					href='https://github.com/maheshcodes12'
					target='_blank'
					rel='noopener noreferrer'>
					<div>
						<i className='fab fa-github fa-2xl text-[#61892F]  hover:text-white'></i>
					</div>
				</a>
				<a
					href='https://www.instagram.com/m.a_he.s.h/'
					target='_blank'
					rel='noopener noreferrer'>
					<div>
						<i className='fab fa-instagram fa-2xl text-[#61892F] hover:text-white'></i>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Header;
