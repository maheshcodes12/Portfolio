import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
	return (
		<div className='min-h-[100vh] w-full flex flex-col gap-4 justify-center items-start '>
			<h3 className='flex text-pretty text-[#464B47]'>Projects</h3>
			<ul className=' text-left'>
				<li className='relative'>
					<div className='group'>
						<div className='absolute inset-0 bg-[#61892F] opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out'></div>
						<a
							href='http://beatcode.netlify.app'
							target='_blank'
							rel='noopener noreferrer'>
							<div className='container relative z-10  py-12'>
								<div className='text-5xl'>
									<i className='fa-solid fa-caret-right text-[#61892F] pr-4'></i>
									Beatcode
								</div>
								<p className='description text-wrap max-w-[80vw]'>
									BeatCode features a robust online compiler, a library of
									practice problems, and the ability to attend live conferences
									and collaborative coding sessions.
								</p>
							</div>
						</a>
					</div>
				</li>
				<li className='relative mt-4'>
					<div className='group'>
						<div className='absolute inset-0 bg-[#61892F] opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out'></div>
						<a
							href='https://github.com/maheshcodes12/-AttendEase-'
							target='_blank'
							rel='noopener noreferrer'>
							<div className='relative z-10  py-12 container'>
								<div className='text-5xl'>
									<i className='fa-solid fa-caret-right text-[#61892F] pr-4'></i>
									AttendEase
								</div>

								<p className='description text-wrap max-w-[80vw]'>
									Web app for seamless attendance tracking across subjects.
									Update schedules, monitor attendance, and ensure compliance
									effortlessly.
								</p>
							</div>
						</a>
					</div>
				</li>
				<li className='relative mt-4'>
					<div className='group'>
						<div className='absolute inset-0 bg-[#61892F] opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out'></div>
						<a
							href='https://dharashivmukhyadhyapaksangh.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'>
							<div className='relative z-10 py-12 container'>
								<div className='text-5xl'>
									<i className='fa-solid fa-caret-right text-[#61892F] pr-4'></i>
									Dharashiv Mukhyadhyapak Sangh
								</div>

								<p className='description'>
									Built as the primary website for Dharashiv Mukhyadhyapak
									Sangh. Streamlines exam data management.
								</p>
							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Projects;
