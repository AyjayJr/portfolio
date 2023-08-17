import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
	return (
		<div className="py-10 flex flex-col items-center">
			<strong>Copyright &#169; 2023</strong>
			<div className="pt-5">
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
		</div>
	)
}

export default Footer
