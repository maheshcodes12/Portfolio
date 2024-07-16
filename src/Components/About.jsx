import React, { useState, useEffect } from "react";

const About = () => {
	return (
		<div className='h-[80vh] flex flex-col justify-center align-top # '>
			<h3 className={` flex text-pretty text-[#464B47]`}>About me</h3>
			<div>
				<div className='text-left'>
					<h1>
						Hi there! I'm a full stack developer specializing in creating
						dynamic and efficient web solutions. I currently study at IIITM
						Gwalior.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default About;
