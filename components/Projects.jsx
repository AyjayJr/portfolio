"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"


const Projects = ({ id }) => {

  const cardVariants = {
    offscreen: {
      y: 400
    },
    onscreen: {
      y: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <div id={id} className="flex flex-col text-center lg:text-left py-44 mx-5 border-b-2 border-gray-200">
      <h2 className="dark:text-primary text-xl text-accent lg:text-left">
        <strong>
          PORTFOLIO
        </strong>
      </h2>
      <p className="my-4 text-2xl dark:text-dark_accent">
        <strong>
          Each project showcases a unique skillset 🛠
        </strong>
      </p>
      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card w-[300px] h-[380px] lg:w-[400px] lg:h-[530px] relative" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/lase.png"
            alt="project image"
            style={{ objectFit: "contain" }}
            fill
            sizes="100%"
          />
        </motion.div>
        <div
          className="max-w-sm mx-auto text-md lg:text-xl"
        >
          <h2 className="dark:text-primary text-center my-4"><strong>LASE</strong></h2>
          <p className="dark:text-secondary text-center text-gray-500">
            Drive high-conversion results through the strategic maintenance and evolution of Lase.com. I design and develop high-performance landing pages that bridge the gap between marketing objectives and a seamless user experience.
          </p>
          <div className="w-full flex justify-center gap-10 mt-6">
            <a
              className="border p-3 hover:scale-125 transition ease-in-out active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://lase.com/fortune-500"
            >
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card w-[300px] h-[380px] lg:w-[400px] lg:h-[530px] relative" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/empire-hoa.png"
            alt="project image"
            style={{ objectFit: "contain" }}
            fill
            sizes="100%"
          />
        </motion.div>
        <div
          className="max-w-sm mx-auto text-md lg:text-xl"
        >
          <h2 className="dark:text-primary text-center my-4"><strong>Empire HOA</strong></h2>
          <p className="dark:text-secondary text-center text-gray-500">
            Spearheaded the complete rebuild of EmpireHOA.com. From initial design concepts and custom mockups to final deployment, I handled every stage of the process to deliver a scalable, high-performance platform.
          </p>
          <div className="w-full flex justify-center gap-10 mt-6">
            <a
              className="border p-3 hover:scale-125 transition ease-in-out active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://empirehoa.com/"
            >
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card w-[300px] h-[380px] lg:w-[400px] lg:h-[530px] relative" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/riancerealty.png"
            alt="project image"
            style={{ objectFit: "contain" }}
            fill
            sizes="100%"
          />
        </motion.div>
        <div
          className="max-w-sm mx-auto text-md lg:text-xl"
        >
          <h2 className="dark:text-primary text-center my-4"><strong>Riance Realty</strong></h2>
          <p className="dark:text-secondary text-center text-gray-500">
            Experience the seamless fusion of high-end design and robust functionality through the complete rebuild of RianceRealty.com. I independently engineered a scalable platform tailored for the modern real estate market.
          </p>
          <div className="w-full flex justify-center gap-10 mt-6">
            <a
              className="border p-3 hover:scale-125 transition ease-in-out active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://riancerealty.net/"
            >
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card_container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card w-[300px] h-[380px] lg:w-[400px] lg:h-[530px] relative" variants={cardVariants}>
          <Image
            className="p-3"
            src="/assets/foodera-long-min.png"
            alt="project image"
            style={{ objectFit: "contain" }}
            fill
            sizes="100%"
          />
        </motion.div>
        <div
          className="max-w-sm mx-auto text-md lg:text-xl"
        >
          <h2 className="dark:text-primary text-center my-4"><strong>Foodera</strong></h2>
          <p className="dark:text-secondary text-center text-gray-500">
            A website showcasing Foodera a deli/bakery that provides good alternatives to fast food. The website incorporates a responsive user-friendly design that can be viewed comfortably on all screen sizes.
          </p>
          <div className="w-full flex justify-center gap-10 mt-6">
            <a
              className="border p-3 transition ease-in-out hover:scale-125 active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://github.com/AyjayJr/foodera"
            >
              <FontAwesomeIcon className="mr-2" icon={faGithub} />
              Source Code
            </a>
            <a
              className="border p-3 transition ease-in-out hover:scale-125 active:shadow-sm shadow-lg border-gray-300 rounded"
              target="_blank"
              href="https://foodera-landing-page.vercel.app/"
            >
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default Projects
