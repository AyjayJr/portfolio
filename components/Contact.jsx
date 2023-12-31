import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Contact = ({ id }) => {
	return (
		<div id={id} className="py-32 mx-5 text-center lg:text-left border-b-2 border-gray-200">
			<div>
        <h2 className="dark:text-dark_accent text-xl text-accent">
					<strong>
						CONTACT ME
					</strong>
				</h2>
        <p className="dark:text-primary my-4 text-2xl">
					<strong>
						Feel free to reach out! 📩
					</strong>
				</p>
			</div>
			<div className="pt-12 flex flex-col lg:flex-row items-center w-full gap-5">
        <div className="dark:bg-dark_primary hover:scale-125 transition ease-in-out shadow-xl rounded-full border border-gray-200">
					<FontAwesomeIcon
						className="my-5 mx-6"
						icon={faLocationDot}
            size="2x"
					/>
				</div>
				<div className="flex flex-col gap-2 text-xl">
					<h3>
						<strong>
							Location
						</strong>
					</h3>
					<p>
						Tampa, FL
					</p>
				</div>
        <div className="hover:scale-125 transition ease-in-out mt-5 lg:mt-0 shadow-xl rounded-full border border-gray-200">
          <a href="mailto:a.j.garcia.jr96@gmail.com">
            <FontAwesomeIcon
              className="my-6 mx-6"
              icon={faEnvelopeOpenText}
              size="2x"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2 text-xl">
          <h3>
            <strong>
              E-mail
            </strong>
          </h3>
          <p>
            a.j.garcia.jr96@gmail.com
          </p>
          </div>
			</div>
		</div>
	)
}

export default Contact
