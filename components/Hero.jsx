"use client"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"

const TechIcon = ({ src }) => {
  return ( 
    <div className="dark:bg-secondary transition-transform ease-in-out hover:scale-125 shadow-xl rounded-full border border-gray-200">
      <Image
        className="inline m-4"
        src={src}
        alt="logo"
        width={40}
        height={40}
      />
    </div>
  )
}

const Hero = ({ id }) => {

  const images = [
    "/assets/html-5.png",
    "/assets/css-3.png",
    "/assets/js.png",
    "/assets/reactjs.svg",
    "/assets/nextjs.svg",
    "/assets/tailwind.svg"
  ]

	return (
		<div id={id} className="pb-56 border-b-2 border-gray-200">
			<div className="pb-10 mb-10 flex flex-col-reverse lg:flex-row lg:text-left text-center items-center justify-between">
				<div className="max-w-2xl">
          <h1 className="gradient_text text-6xl pb-8">
						<b>Software Engineer</b>
					</h1>
					<p className="ml-1 mb-8 text-xl max-w-xl">
						Hi, I'm <strong>Anthony Garcia Jr.</strong> a recent Computer Science graduate with a strong enthusiam for software engineering and a hunger for continuous learning.
					</p>
					<a target="_blank" href="https://linkedin.com/in/anthony-j-garcia-jr">
						<FontAwesomeIcon
							className="inline ml-1 mr-4 hover:scale-125 transition ease-in-out"
							icon={faLinkedin}
              size="2x"
						/>
					</a>
					<a target="_blank" href="https://github.com/ayjayjr">
						<FontAwesomeIcon
							className="inline hover:scale-125 transition ease-in-out"
							icon={faGithub}
              size="2x"
						/>
					</a>
				</div>
				<div
					className="relative mb-10 bg-hero-img w-96 h-96 bg-cover bg-center bg-no-repeat shadow-md rounded-full relative glowing_gradient" 
					priority="true"
				>
          <div
            className="dark:bg-secondary border border-gray-200 drop-shadow-md py-4 px-3 cursor-default bg-gray-200 rounded-full absolute bottom-10 left-0 text-4xl" 
          >
            <motion.div
              whileHover={{
                rotate: [0,30,0,30,0],
                transition: { repeat: 2},
              }}
              animate={{ rotate: [0,30,0,30,0] }}
              transition={{ repeat: 2 }}
            >
              👋
            </motion.div>
          </div>
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-16">
        {images.map((image) => <TechIcon src={image} key={Math.random()}/>)}
			</div>
		</div>
	)
}

export default Hero 
