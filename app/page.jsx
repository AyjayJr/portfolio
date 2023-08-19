"use client"

import Nav from "@/components/Nav"
import ModalMenu from "@/components/ModalMenu"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

import { useState } from "react"
import ReactDOM, { createPortal } from "react-dom"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false;

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const openMenu = () => { setIsMenuOpen(prev => !prev)} 

  const portalRoot = document.getElementById("portalRoot")

	return (
		<>
      <header className="dark:bg-dark_bg dark:shadow-accent bg-bg py-6 fixed top-0 left-0 right-0 shadow-lg z-10">
				<Nav clickHandler={openMenu} />
			</header>
      {createPortal(
        <ModalMenu menuOpen={isMenuOpen} clickHandler={openMenu} />,
        portalRoot
      )}
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
