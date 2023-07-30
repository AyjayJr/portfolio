import "@/styles/globals.css"
import Nav from "@/components/Nav"

export const metadata = {
	title: "Anthony Garcia",
	description: "Showcasing the skills and related projects of Anthony Garcia Jr"
}

const layout = ({ children }) => {
	return (
		<html lang="en">
			<body className="bg-bg container mt-48 mx-auto max-w-5xl">
				<header className="py-6 fixed top-0 left-0 right-0 shadow-lg bg-bg z-10">
					<Nav />
				</header>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}

export default layout