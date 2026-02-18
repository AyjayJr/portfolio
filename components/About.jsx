"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const About = ({ id }) => {
	return (
		<div
			id={id}
			className="py-44 mx-5 border-b-2 border-gray-200 flex flex-col-reverse items-center
      lg:items-start lg:flex-row-reverse justify-between gap-10"
		>
        <div className="max-w-lg flex flex-col items-center lg:items-start">
          <motion.p
            className="dark:text-primary text-xl text-accent lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <strong>ABOUT ME</strong>
          </motion.p>
          <motion.p
            className="my-4 text-2xl text-center lg:text-left dark:text-dark_accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <strong>Crafting maintainable code from initial mockup to production-ready deployment✅</strong>
          </motion.p>
          <motion.p
            className="text-lg text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            With three years of experience, I’ve mastered the art of taking a concept from a Figma mockup to a fully realized custom WordPress theme or a complex Next.js application. I don't just write code, I build design-forward solutions that solve real-world problems.
          </motion.p>
        </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Image
          className="rounded-lg box_shadow"
          src="/assets/christopher-gower-unsplash.jpg"
          alt="laptop"
          width={500}
          height={500}
        />
      </motion.div>
		</div>
	)
}

export default About
