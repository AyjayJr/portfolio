"use client"

import "@/styles/globals.css" 
import Nav from "@/components/Nav"

import { useState } from "react"

const layout = ({ children }) => {
	const [ isDark, setIsDark ] = useState(true);

	const darkModeHandler = () => {
		setIsDark((prev) => (!prev));
	}

	return (
		<html lang="en" data-theme={isDark ? "dark" : "light"}>
			<body>
				<header className="container">
					<Nav
						clickHandler={darkModeHandler}
					/>
				</header>
				<main className="container">
					{children}
				</main>
				<footer className="container">
					Footer	
				</footer>
			</body>
		</html>
	)
}

export default layout