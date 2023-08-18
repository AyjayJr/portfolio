import DarkModeButton from "@/components/DarkModeButton"

const Nav = () => {
	return (
    <nav className="container mx-auto max-w-5xl flex flex-row gap-3 md:justify-between items-center">
      <ul className="ml-1 mr-44 md:mr-0 text-2xl ">
				<li><strong>anthonyjr.dev</strong></li>
			</ul>
			<ul className="hidden md:flex flex-row items-center space-x-4 text-lg">
        <li key={1} className="dark:hover:text-dark_accent text hover:text-accent"><a href="#">Home</a></li>
        <li key={2} className="dark:hover:text-dark_accent hover:text-accent"><a href="#about">About</a></li>
        <li key={3} className="dark:hover:text-dark_accent hover:text-accent"><a href="#projects">Projects</a></li>
        <li key={4} className="dark:hover:text-dark_accent hover:text-accent"><a href="#contact">Contact</a></li>
       <DarkModeButton />
			</ul>
      <DarkModeButton classname="md:hidden" />
      <p className="md:hidden mr-2 text-2xl">&#9776;</p>
		</nav>
	)
}

export default Nav
