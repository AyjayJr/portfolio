"use client"
import DarkModeButton from "@/components/DarkModeButton"

const Nav = ({ clickHandler }) => {
	return (
    <nav className="container relative mx-auto max-w-5xl flex flex-row justify-between items-center">
      <ul className="ml-1 text-2xl ">
				<li><strong>anthonyjr.dev</strong></li>
			</ul>
			<ul className="hidden md:flex flex-row items-center space-x-4 text-lg mr-16 ">
        <li key={1} className="dark:hover:text-dark_accent text hover:text-accent"><a href="#">Home</a></li>
        <li key={2} className="dark:hover:text-dark_accent hover:text-accent"><a href="#about">About</a></li>
        <li key={3} className="dark:hover:text-dark_accent hover:text-accent"><a href="#projects">Projects</a></li>
        <li key={4} className="dark:hover:text-dark_accent hover:text-accent"><a href="#contact">Contact</a></li>
			</ul>
      <button
        onClick={clickHandler}
        className="mr-3 text-2xl hover:text-accent dark:hover:dark_accent md:hidden"
      >
        &#9776;
      </button>
      <div className="absolute right-12 md:right-0">
        <DarkModeButton />
      </div>
		</nav>
	)
}

export default Nav
