"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"


const Projects = ({ id }) => {

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

	return (
    <div className="flex flex-col text-center lg:text-left py-44 mx-5 border-b-2 border-gray-200">
			<h2 className="text-xl text-accent lg:text-left">
				<strong>
				  PORTFOLIO	
				</strong>
			</h2>
			<p className="my-4 text-2xl text-text">
				<strong>
          Each project showcases a unique skillset ⚙ 
				</strong>
			</p>

      <motion.div
        className="card_container flex align-start flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card relative mb-16" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/foodera-long-min.png"
            alt="project image"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
        <motion.div
          className="max-w-sm mx-auto text-xl"
        >
          <h2 className="text-center mb-4"><strong>Foodera</strong></h2>
          <motion.p className="text-center text-gray-500">
            A website showcasing Foodera a deli/bakery that provides good alternatives to fast food. The website incorporates a responsive user-friendly design that can be viewed comfortably on all screen sizes.
          </motion.p>
          <div className="w-full flex justify-center gap-10 mt-6">
            <a
              className="border p-3 active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://github.com/AyjayJr/foodera"
            >
              <FontAwesomeIcon className="mr-2" icon={faGithub} />
              Source Code
            </a>
            <a
              className="border p-3 active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://foodera-landing-page.vercel.app/"
            >
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card relative mb-16" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/promptopia-long-min.png"
            alt="project image"
            layout="fill"
            objectFit="contain"
            overflow="hidden"
          />
        </motion.div>
        <motion.div
          className="max-w-sm mx-auto text-xl"
        >
          <motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, repudiandae dolorem! Dolorem placeat, eum accusantium eos, recusandae quo rem nostrum molestiae quod similique corrupti aperiam, velit soluta voluptatem omnis? Nihil!</motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card relative mb-16" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/react-meals-long-min.png"
            alt="project image"
            layout="fill"
            objectFit="contain"
            overflow="hidden"
          />
        </motion.div>
        <motion.div
          className="max-w-sm mx-auto text-xl"
        >
          <motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, repudiandae dolorem! Dolorem placeat, eum accusantium eos, recusandae quo rem nostrum molestiae quod similique corrupti aperiam, velit soluta voluptatem omnis? Nihil!</motion.p>
        </motion.div>
      </motion.div>
		</div>
	)
}

export default Projects
