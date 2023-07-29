import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row lg:text-left text-center items-center justify-between">
			<div className="max-w-2xl">
				<h1 className="text-6xl gradient_text pb-5">
					<b>Front-End Developer</b>
				</h1>
				<p className="ml-1 mb-4 text-lg max-w-xl">
					Hi, I'm <strong>Anthony Garcia Jr.</strong> A passionate front-end developer based out of <strong>Florida, USA </strong>👋🏽
				</p>
				<a target="_blank" href="https://linkedin.com/in/anthony-j-garcia-jr">
					<FontAwesomeIcon
						className="inline ml-1 mr-2"
						icon={faLinkedin}
						width={25}
					/>
				</a>
				<a target="_blank" href="https://github.com/ayjayjr">
					<FontAwesomeIcon
						className="inline"
						icon={faGithub}
						width={25}
					/>
				</a>
			</div>
			<div priority={true} className="bg-hero-img w-96 h-96 bg-cover bg-center bg-no-repeat border-text border-2 border_animation"> 
			</div>
		</div>
	)
}

export default Home