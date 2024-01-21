import React, { useState, useEffect, useRef } from "react";
import "./SplashScreen.css";
import Logo from "../assets/Logo/alseef logo.png";

const SplashScreen = () => {
	const [visible, setVisible] = useState(true);
	const logoRef = useRef(null);
	const splitUpRef = useRef(null);
	const splitDownRef = useRef(null);

	useEffect(() => {
		const logoAnimationDuration = 2000; 
		const splitAnimationDelay = 3000; 

		const logo = logoRef.current;

		const logoAnimationEndHandler = () => {
			// Logo animation has ended, start split animations
			setTimeout(() => {
				setVisible(false);
			}, splitAnimationDelay);
		};

		if (logo) {
			logo.addEventListener(
				"animationend",
				logoAnimationEndHandler
			);
		}

		const timeoutId = setTimeout(() => {
			setVisible(false);
		}, logoAnimationDuration);

		return () => {
			clearTimeout(timeoutId);
			if (logo) {
				logo.removeEventListener(
					"animationend",
					logoAnimationEndHandler
				);
			}
		};
	}, []);

	return (
		<div className='splash-screen'>
			<div
				ref={splitUpRef}
				className='splitUp'
			></div>
			<div
				ref={splitDownRef}
				className='splitDown'
			></div>
			{visible && (
				<img
					ref={logoRef}
					className='flipLogo'
					src={Logo}
					alt='logo'
				/>
			)}
		</div>
	);
};

export default SplashScreen;
