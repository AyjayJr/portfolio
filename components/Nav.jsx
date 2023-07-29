import Image from "next/image"

const Nav = ({ clickHandler }) => {
	return (
		<nav className="container mx-auto flex flex-row justify-between items-center">
			<ul className="text-2xl text-text">
				<li><strong>anthony.dev</strong></li>
			</ul>
			<ul className="hidden md:flex flex-row space-x-4 text-lg">
				<li className="text-text hover:text-primary"><a href="#">Home</a></li>
				<li className="text-text hover:text-primary"><a href="#">About</a></li>
				<li className="text-text hover:text-primary"><a href="#">Projects</a></li>
				<li className="text-text hover:text-primary"><a href="#">Contact</a></li>
				<li>
					<button role="button" onClick={clickHandler}>
						<Image
							src="/assets/brightness.png"
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