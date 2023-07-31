import "@/styles/globals.css"
import Nav from "@/components/Nav"

export const metadata = {
	title: "Anthony Garcia",
	description: "Showcasing the skills and related projects of Anthony Garcia Jr"
}

const layout = ({ children }) => {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="bg-bg container mt-48 mx-auto max-w-5xl">
				{children}
			</body>
		</html>
	)
}

export default layout