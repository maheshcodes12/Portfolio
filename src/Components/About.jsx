import React, { useState, useEffect } from "react";

const About = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='h-[80vh] flex flex-col justify-center align-top px-64'>
			<h3 className={` flex text-pretty text-[#464B47]`}>About me</h3>
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div className='text-left '>
					<h1 className={`${isHovered ? "hidden" : "relative"}`}>
						Hi there! I'm a full stack developer specializing in creating
						dynamic and efficient web solutions. I currently study at IIITM
						Gwalior.
					</h1>
				</div>

				<div className='text-left  '>
					<h1
						className={`${!isHovered ? "hidden" : "relative"} text-[#6B6E70]`}>
						Nobody asked about my gaming skills but they are 404
					</h1>
				</div>
			</div>
		</div>
	);
};

export default About;