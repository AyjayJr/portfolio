"use client"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"

const ModalMenu = ({ menuOpen, clickHandler}) => {
  return (
    <div className={`${menuOpen ? "left-0" : "left-[-100%]"} dark:bg-dark_bg bg-bg transition-all ease-in-out fixed top-0 w-full h-full z-50`}>
      <button className="relative left-[95%] top-6"onClick={clickHandler}>&#x2716;</button>
    </div>
  )
}

export default ModalMenu
