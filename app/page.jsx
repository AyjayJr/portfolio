"use client"

import Nav from "@/components/Nav"
import ModalMenu from "@/components/ModalMenu"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false;

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  const openMenu = () => { setIsMenuOpen(prev => !prev)} 


	return (
		<>
      <header className="dark:bg-dark_bg dark:shadow-accent bg-bg py-6 fixed top-0 left-0 right-0 shadow-lg z-10">
				<Nav clickHandler={openMenu} />
			</header>
      {mounted ? createPortal(
        <ModalMenu menuOpen={isMenuOpen} clickHandler={openMenu} />,
        document.body 
      ) : null}
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
