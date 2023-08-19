"use client"

const ModalMenu = ({ menuOpen, clickHandler}) => {
  return (
    <div className={`${menuOpen ? "left-0" : "left-[-100%]"} dark:bg-dark_bg bg-bg transition-all ease-in-out fixed top-0 w-full h-full z-50`}>
      <button
        className="dark:hover:dark_accent relative text-4xl left-[93%] top-4"
        onClick={clickHandler}
      >
        &#10799; 
      </button>
			<ul className="flex h-full flex-col gap-10 mt-16 items-center text-2xl">
        <li
          key={1}
          className="dark:hover:text-dark_accent text hover:text-accent"
          onClick={clickHandler}
        >
            <a href="#">Home</a>
        </li>
        <li
          key={2}
          className="dark:hover:text-dark_accent hover:text-accent"
          onClick={clickHandler}
        >
          <a href="#about">About</a>
        </li>
        <li
          key={3}
          className="dark:hover:text-dark_accent hover:text-accent"
          onClick={clickHandler}
        >
            <a href="#projects">Projects</a>
        </li>
        <li
          key={4}
          className="dark:hover:text-dark_accent hover:text-accent"
          onClick={clickHandler}
        >
          <a href="#contact">Contact</a>
        </li>
			</ul>
    </div>
  )
}

export default ModalMenu
