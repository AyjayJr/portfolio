import DarkModeButton from "@/components/DarkModeButton"

const Nav = () => {
	return (
    <nav className="container mx-auto max-w-5xl flex flex-row justify-between items-center">
      <ul className="ml-1 text-2xl ">
				<li><strong>anthonyjr.dev</strong></li>
			</ul>
			<ul className="hidden md:flex flex-row items-center space-x-4 text-lg">
        <li key={1} className="dark:hover:text-dark_accent text hover:text-accent"><a href="#">Home</a></li>
        <li key={2} className="dark:hover:text-dark_accent hover:text-accent"><a href="#about">About</a></li>
        <li key={3} className="dark:hover:text-dark_accent hover:text-accent"><a href="#projects">Projects</a></li>
        <li key={4} className="dark:hover:text-dark_accent hover:text-accent"><a href="#contact">Contact</a></li>
       <DarkModeButton />
			</ul>
      <div className="flex items-center md:hidden gap-4">
        <DarkModeButton />
        <p className="mr-2 text-2xl">&#9776;</p>
      </div>
		</nav>
	)
}

export default Nav
