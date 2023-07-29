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
			<body className="bg-bg container mt-48 mx-auto max-w-5xl">
				<header className="py-6 fixed top-0 left-0 right-0 shadow-lg bg-bg z-10">
					<Nav
						clickHandler={darkModeHandler}
					/>
				</header>
				<main className="mb-10">
					{children}
				</main>
			</body>
		</html>
	)
}

export default layout