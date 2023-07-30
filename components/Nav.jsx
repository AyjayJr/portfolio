import Image from "next/image"

const Nav = () => {
	return (
		<nav className="container mx-auto max-w-5xl flex flex-row justify-between items-center">
			<ul className="ml-1 text-2xl text-text">
				<li><strong>anthonyjr.dev</strong></li>
			</ul>
			<ul className="hidden md:flex flex-row space-x-4 text-lg">
				<li className="text-text hover:text-accent"><a href="#">Home</a></li>
				<li className="text-text hover:text-accent"><a href="#">About</a></li>
				<li className="text-text hover:text-accent"><a href="#">Projects</a></li>
				<li className="text-text hover:text-accent"><a href="#">Contact</a></li>
				<li>
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
		</nav>
	)
}

export default Nav