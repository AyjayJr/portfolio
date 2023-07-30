import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
	return (
		<div className="pb-56 border-b-2 border-gray-200">
			<div className="pb-10 mb-10 flex flex-col-reverse lg:flex-row lg:text-left text-center items-center justify-between">
				<div className="max-w-2xl">
					<h1 className="text-6xl pb-8">
						<b>Full-stack Developer</b>
					</h1>
					<p className="ml-1 mb-8 text-xl max-w-xl">
						Hi, I'm <strong>Anthony Garcia Jr.</strong> A passionate full-stack developer based out of <strong>Florida, USA </strong>👋🏽
					</p>
					<a target="_blank" href="https://linkedin.com/in/anthony-j-garcia-jr">
						<FontAwesomeIcon
							className="inline ml-1 mr-4 hover:scale-125 transition ease-in-out"
							icon={faLinkedin}
							width={25}
						/>
					</a>
					<a target="_blank" href="https://github.com/ayjayjr">
						<FontAwesomeIcon
							className="inline hover:scale-125 transition ease-in-out"
							icon={faGithub}
							width={25}
						/>
					</a>
				</div>
				<div
					className="mb-10 bg-hero-img w-96 h-96 bg-cover bg-center bg-no-repeat shadow-md rounded-full relative glowing_gradient border_animation"
					priority="true"
				>
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
				<h2 className="text-lg">
					<strong className="hidden lg:block text-text">
						Tech Stack
					</strong>
				</h2>
				<div className="floating shadow-xl rounded-full border border-gray-200">
					<Image
						className="inline m-4"
						src="/assets/html-5.png"
						alt="html5_logo"
						width={40}
						height={40}
						unoptimized
					/>
				</div>
				<div className="floating delay_2s shadow-xl rounded-full border border-gray-200">
					<Image
						className="inline m-4"
						src="/assets/css-3.png"
						alt="css3_logo"
						width={40}
						height={40}
						unoptimized
					/>
				</div>
				<div className="floating shadow-xl rounded-full border border-gray-200">
					<Image
						className="inline m-4"
						src="/assets/js.png"
						alt="js_logo"
						width={40}
						height={40}
						unoptimized
					/>
				</div>
				<div className="floating delay_2s shadow-xl rounded-full border border-gray-200">
					<Image
						className="inline m-4"
						src="/assets/reactjs.svg"
						alt="reactjs_logo"
						width={40}
						height={40}
						unoptimized
					/>
				</div>
				<div className="floating shadow-xl rounded-full border border-gray-200">
					<Image
						className="inline m-4"
						src="/assets/nextjs.svg"
						alt="nextjs_logo"
						width={40}
						height={40}
						unoptimized
					/>
				</div>
				<div className="floating delay_2s shadow-xl rounded-full border border-gray-200">
					<Image
						className="inline m-4"
						src="/assets/tailwind.svg"
						alt="tailwind_logo"
						width={40}
						height={40}
						unoptimized
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero 