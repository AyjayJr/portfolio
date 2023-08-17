import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
	return (
		<nav className="container mx-auto max-w-5xl flex flex-row justify-between items-center">
			<ul className="ml-1 text-2xl ">
				<li><strong>anthonyjr.dev</strong></li>
			</ul>
			<ul className="hidden md:flex flex-row space-x-4 text-lg">
        <li key={1} className="dark:hover:text-dark_accent text hover:text-accent"><a href="#">Home</a></li>
        <li key={2} className="dark:hover:text-dark_accent hover:text-accent"><a href="#about">About</a></li>
        <li key={3} className="dark:hover:text-dark_accent hover:text-accent"><a href="#projects">Projects</a></li>
        <li key={4} className="dark:hover:text-dark_accent hover:text-accent"><a href="#contact">Contact</a></li>
				<li key={5}>
					<button role="button">
						<Image
							src="/assets/brightness.png"
							alt="dark_mode_button"
							width={20}
							height={20}
						/>
					</button>
				</li>
			</ul>
      <FontAwesomeIcon className="sm:hidden mr-2" icon={faBars} />
		</nav>
	)
}

export default Nav
