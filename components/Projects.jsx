"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedI } from "@fortawesome/free-brands-svg-icons";


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
					PROJECTS
				</strong>
			</h2>
			<p className="my-4 text-2xl text-text">
				<strong>
					Each project is a unique piece of development 🧩
				</strong>
			</p>
      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card mb-16" variants={cardVariants}>
          A 
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
