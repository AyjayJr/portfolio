import Image from "next/image"

const Nav = ({ clickHandler }) => {
	return (
		<nav>
			<ul>
				<li><strong>anthony.dev</strong></li>
			</ul>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
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