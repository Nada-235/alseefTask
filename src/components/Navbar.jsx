import Styles from "./Navbar.module.css";
import logo from "../assets/Logo/alseef logo.png";

import { NavLink } from "react-router-dom";

// Navbar links
const Sections = [
	{ path: "/", name: "Home" },
	{ path: "/about", name: "About" },
	{ path: "/services", name: "Services" },
	{ path: "/projects", name: "Projects" },
	{ path: "/packages", name: "Packages" },
	{ path: "/contact", name: "Contact" },
];

function Navbar() {

	return (
		// Parent div
		<nav className={Styles.navbar}>
			{/* logo  */}
			<NavLink
				className={Styles.logo}
				to='/'
			>
				<img
					src={logo}
					alt='alseef'
				/>
			</NavLink>
			{/* navbar links Desktop */}
			<ul className={Styles.navbarLinks}>
				{/* map Sections */}
				{Sections.map((section) => (
					<li key={section.name}>
						<NavLink
							to={section.path}
							className={Styles.link}
							data-after-content={section.name}
						>
							{section.name}
						</NavLink>
					</li>
				))}
			</ul>

			<div>
				<NavLink
					to='/getstarted'
					className={Styles.link}
				>
					<button className={Styles.btn}>
						<span className={Styles.text}>Get Started</span>
						<span className={Styles.arrow}>→</span>
					</button>
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
