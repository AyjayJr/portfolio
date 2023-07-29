import Image from "next/image"

const Nav = () => {
	return (
		<nav>
			<ul>
				<li><strong>Anthony Garcia Jr</strong></li>
			</ul>
			<ul>
				<li>
					<a href="#" class="secondary">
						<Image
							src="/assets/In.png"
							alt="linkedin_logo"
							width={20}
							height={20}
						/>
					</a>
				</li>
				<li>
					<a href="#" class="secondary">
						<Image
							src="/assets/github.png"
							alt="github_logo"
							width={20}
							height={20}
						/>
					</a>
				</li>
				<li>
					<button role="button">
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