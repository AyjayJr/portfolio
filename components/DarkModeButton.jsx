"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add("dark")
    }
    else {
      body.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  }

  return (
    <div
      className={`w-10 h-6 opacity-75 flex items-center ${darkMode ? "justify-end bg-accent" : "justify-start bg-primary"}
      rounded-full p-1 pointer`}
      onClick={toggleDarkMode}
    >
      <motion.div
        className="w-5 h-5 bg-gray-700 rounded-full z-10"
        transition={spring}
        layout
      />
    </div>
  )
}

export default DarkModeButton;
