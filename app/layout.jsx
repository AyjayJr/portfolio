"use client"

import "@/styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

const layout = ({ children }) => {
	return (
		<html lang="en">
      <meta type="title" content="Anthony Garcia" />
      <meta type="description" content="Showcasing the skills and related projects of Anthony Garcia Jr" />
			<body
        id="portal"
        className="bg-bg max-w-screen container mt-48 mx-auto max-w-5xl"
      >
				{children}
			</body>
		</html>
	)
}

export default layout
