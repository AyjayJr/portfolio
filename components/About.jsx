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
            className="text-xl text-accent lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <strong>ABOUT ME</strong>
          </motion.p>
          <motion.p
            className="my-4 text-2xl text-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <strong>A passionate Software Engineer with experience in many technologies ☑</strong>
          </motion.p>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            My post-graduation journey has been defined by my commitment to staying at the forefront of the ever-evolving tech landscape. I believe that the key to becoming a better engineer lies in embracing change and seeking out challenges. My experiences include mastering React and Next.js to build more robust and efficient applications.
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
