"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedI } from "@fortawesome/free-brands-svg-icons";

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
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }) {
	const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

	return (
		<motion.div
			className="card_container"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div className="card" variants={cardVariants}>
				{emoji}
			</motion.div>
			<motion.div
				className="max-w-sm mx-auto text-xl"
			>
				<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, repudiandae dolorem! Dolorem placeat, eum accusantium eos, recusandae quo rem nostrum molestiae quod similique corrupti aperiam, velit soluta voluptatem omnis? Nihil!</p>
			</motion.div>
		</motion.div>
	);
}

const food = [
	["🍅", 340, 10],
	["🍊", 20, 40],
	["🍋", 60, 90],
	["🍐", 80, 120],
];

const Projects = () => {
	return (
		<div className="py-44 mx-5 border-b-2 border-gray-200">
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
			{food.map(([emoji, hueA, hueB]) => (
				<Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />))}
		</div>
	)
}

export default Projects