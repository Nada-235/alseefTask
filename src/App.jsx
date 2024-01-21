import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

function App() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

return (
		<>
			{showSplash ? (
				<SplashScreen />
			) : (
				<>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='services' element={<Services />} />
						<Route path='projects' element={<Projects />} />
						<Route path='packages' element={<Packages />} />
						<Route path='contact' element={<Contact />} />
						<Route path='getstarted' element={<GetStarted />} />
					</Routes>
				</>
			)}
		</>
	);
}

export default App;
