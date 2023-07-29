import Image from "next/image"

const Nav = ({ clickHandler }) => {
	return (
		<nav>
			<ul>
				<li><strong>Anthony Garcia Jr</strong></li>
			</ul>
			<ul>
				<li>
					<a
						href="https://linkedin.com/in/anthony-j-garcia-jr" 
						target="_blank"
						className="secondary"
					>
						<Image
							src="/assets/In.png"
							alt="linkedin_logo"
							width={20}
							height={20}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/ayjayjr"
						className="secondary"
						target="_blank"
					>
						<Image
							src="/assets/github.png"
							alt="github_logo"
							width={20}
							height={20}
						/>
					</a>
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