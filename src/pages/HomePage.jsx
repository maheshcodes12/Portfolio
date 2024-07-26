import React, { useState, useEffect, useRef } from "react";
import { backOut, motion } from "framer-motion";
import Header from "../Components/Header";
import "./Homepage.css";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";

const HomePage = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const size = isHovered ? 400 : 40;
	const [scrollPosition, setScrollPosition] = useState(0);

	const ProfileRef = useRef(null);
	const AboutRef = useRef(null);
	const WorkRef = useRef(null);
	const ContactRef = useRef(null);
	const [scrollToValue, setScrollToValue] = useState(0);

	const handleTabChange = (newValue) => {
		setScrollToValue(newValue);

		if (newValue === 0) {
			ProfileRef.current?.scrollIntoView({ behavior: "smooth" });
		} else if (newValue === 1) {
			AboutRef.current?.scrollIntoView({ behavior: "smooth" });
		} else if (newValue === 2) {
			WorkRef.current?.scrollIntoView({ behavior: "smooth" });
		} else if (newValue === 3) {
			ContactRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY =
				document.documentElement.scrollTop || document.body.scrollTop;
			setScrollPosition(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<div onClick={() => handleTabChange(0)}>
				<Header />
			</div>

			<div
				ref={ProfileRef}
				className='w-[100vw] relative h-full '>
				<div className='h-[100vh] w-full flex flex-col justify-center items-center gap-8 px-64 '>
					<h3 className='flex text-pretty tracking-widest text-[#86C232]'>
						Mahesh Anant Suryawanshi
					</h3>
					<div className='font-extrabold sm:text-8xl text-xl text-white'>
						<p>Passionate Web developer</p>
					</div>

					<motion.div
						className='font-extrabold text-8xl hidden sm:flex text-[#61892F] maskimage pt-14'
						animate={{
							WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
								mousePosition.y - size / 2
							}px`,
							WebkitMaskSize: `${size}px`,
						}}
						transition={{ ease: "backOut", duration: 0 }}>
						<p
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}>
							When not playing games or sleeping
						</p>
					</motion.div>
				</div>
				<div
					ref={AboutRef}
					className={`${
						scrollPosition > 500 && scrollPosition < 1000
							? "text-white"
							: "text-[#6B6E70]"
					}`}>
					<About scrollPosition={scrollPosition} />
				</div>
				<div
					className={`${
						scrollPosition > 1000 && scrollPosition < 1650
							? "text-white"
							: "text-[#6B6E70]"
					}`}>
					<Experience />
				</div>
				<div
					ref={WorkRef}
					className={`${
						scrollPosition > 1650 && scrollPosition < 2300
							? "text-white"
							: "text-[#6B6E70]"
					}`}>
					<Projects />
				</div>

				<div className='h-[40vh] flex flex-col justify-center align-top px-64'>
					<h3
						className={`flex text-pretty ${
							scrollPosition > 2300 && scrollPosition < 2500
								? "text-[#61892F]"
								: "text-[#464B47]"
						}`}>
						If you got some more time
					</h3>
					<h1
						className={`flex text-pretty ${
							scrollPosition > 2300 && scrollPosition < 2500
								? "text-white"
								: "text-[#6B6E70]"
						}`}>
						<a
							href='https://www.poetryfoundation.org/poems/46473/if---'
							target='_blank'
							rel='noopener noreferrer'>
							Read "IF" by Rudyard Kipling
						</a>
					</h1>
				</div>

				<div className='h-[60vh] flex flex-col justify-center align-top px-64'>
					<h3 className='flex text-pretty text-[#61892F]'>Let's Talk</h3>
					<div
						ref={ContactRef}
						className='flex gap-64 w-full justify-start pt-14 items-center'>
						<div
							className={`flex flex-col leading-10 text-start font-extrabold text-3xl ${
								scrollPosition > 2500 ? "text-white" : "text-[#6B6E70]"
							}`}>
							<div>
								<i className='fa-solid fa-caret-right text-[#61892F] pr-4'></i>
								<a
									href='https://github.com/maheshcodes12'
									target='_blank'
									rel='noopener noreferrer'>
									Github
								</a>
							</div>
							<div>
								<i className='fa-solid fa-caret-right text-[#61892F] pr-4'></i>
								<a
									href='https://www.linkedin.com/in/mahesh-suryawanshi-768905257/'
									target='_blank'
									rel='noopener noreferrer'>
									LinkedIn
								</a>
							</div>
							<div>
								<i className='fa-solid fa-caret-right text-[#61892F] pr-4'></i>
								<a
									href='https://www.instagram.com/m.a_he.s.h/'
									target='_blank'
									rel='noopener noreferrer'>
									Instagram
								</a>
							</div>
						</div>
						<div className='flex flex-col leading-10 text-start'>
							<p className='text-[#61892F] tracking-widest text-sm'>EMAIL</p>
							<p
								className={`${
									scrollPosition > 2500 ? "text-white" : "text-[#6B6E70]"
								}`}>
								maheshascoder@gmail.com
							</p>
							<p className='text-[#61892F] tracking-widest text-sm'>Phone</p>
							<p
								className={`${
									scrollPosition > 2500 ? "text-white" : "text-[#6B6E70]"
								}`}>
								+91 9322397800
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className=' top-16 right-16 flex flex-col cursor-pointer gap-4 fixed '>
				<div
					onClick={() => handleTabChange(1)}
					className='hover:text-[#61892F]'>
					About
				</div>
				<div
					onClick={() => handleTabChange(2)}
					className='hover:text-[#61892F]'>
					Work
				</div>
				<a
					href='https://drive.google.com/file/d/1Vu4Hi6x3Ab-ETg_3YxPax55KuRufOkMs/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='hover:text-[#61892F]'>Resume</div>
				</a>
				<div
					onClick={() => handleTabChange(3)}
					className='hover:text-[#61892F]'>
					Contact
				</div>
			</div>
		</div>
	);
};

export default HomePage;
