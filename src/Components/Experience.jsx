import React, { useState, useEffect } from "react";

const Experience = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='h-[80vh] flex flex-col justify-center align-top px-64'>
			<h3 className='flex text-pretty text-[#464B47]'>Experience</h3>
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div className='text-left '>
					<h1 className={`${isHovered ? "hidden" : "relative"}`}>
						Experienced in building scalable web applications using a diverse
						range of technologies.
					</h1>
				</div>

				<div className='text-left  '>
					<h1 className={`${!isHovered ? "hidden" : "relative"}`}>
						Experienced in the fine arts of googling and hoping code aligns with
						the universe's plans.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Experience;
