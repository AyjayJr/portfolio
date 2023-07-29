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
		<html lang="en">
			<body className="bg-bg container mx-auto">
				<header className="p-6 fixed top-0 left-0 right-0 shadow shadow-bottom">
					<Nav
						clickHandler={darkModeHandler}
					/>
				</header>
				<main className="mt-48">
					{children}
				</main>
			</body>
		</html>
	)
}

export default layout