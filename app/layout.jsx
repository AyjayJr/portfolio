import Nav from "@/components/Nav"
import "@picocss/pico"

export const metadata = {
	title: "Anthony Jr - Home",
	description: "Anthony Jr's portfolio showcasing skills and related works"
}

const layout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<header className="container">
					<Nav/>
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