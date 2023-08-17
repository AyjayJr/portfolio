import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Home = () => {
	return (
		<>
      <header className="dark:bg-dark_bg bg-bg py-6 fixed top-0 left-0 right-0 shadow-lg z-10">
				<Nav />
			</header>
			<main>
				<Hero id="#" />
				<About id="about" />
				<Projects id="projects" />
				<Contact id="contact" />
				<Footer />
			</main>
		</>
	)
}

export default Home
