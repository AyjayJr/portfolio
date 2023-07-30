import Image from "next/image"

const About = () => {
	return (
		<div className="py-44 mb-52 mx-5 border-b-2 border-gray-200 flex flex-col-reverse items-center lg:items-start lg:flex-row-reverse justify-between gap-10">
			<div className="max-w-lg flex flex-col items-center lg:items-start">
				<h2	className="text-xl text-accent lg:text-left">
					<strong>ABOUT ME</strong>
				</h2>
				<p className="my-4 text-2xl text-text">
					<strong>A passionate Full-stack developer with experience in many technologies ☑</strong>
				</p>
				<p className="text-lg">
				a passionate and dedicated junior Full Stack Developer with a strong foundation in cutting-edge technologies and a flair for crafting immersive web experiences. My journey in software development has exposed me to a diverse range of tools and frameworks, and I thrive on the challenges and excitement that come with building dynamic web applications.
				</p>
			</div>
			<Image
				className="rounded-lg"
				src="/assets/christopher-gower-unsplash.jpg"
				alt="laptop"
				width={500}
				height={500}
			/>
		</div>
	)
}

export default About