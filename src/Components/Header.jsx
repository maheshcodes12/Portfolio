import React from "react";

const Header = () => {
	return (
		<div className='z-10 fixed top-12 left-24 flex flex-col justify-between h-[85vh]'>
			<div className='cursor-pointer'>
				<div className='bg-[#61892F] border rounded-full p-2 pb-3 flex justify-center items-center'>
					<img
						width={40}
						src='High_quality_photo_of_a_monkey_astronaut.png'
						alt='Astronaut'
					/>
				</div>
			</div>

			<div className='flex flex-col gap-8 bottom-10 cursor-pointer mt-auto'>
				<div>
					<i className='fab fa-linkedin-in fa-2xl text-[#61892F]'></i>
				</div>
				<div>
					<i className='fab fa-github fa-2xl text-[#61892F]'></i>
				</div>
				<div>
					<i className='fab fa-instagram fa-2xl text-[#61892F]'></i>
				</div>
			</div>
		</div>
	);
};

export default Header;
