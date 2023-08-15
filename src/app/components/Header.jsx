"use client"
import React, { useState } from "react"
import Button from "./Button"
import { FaBars, FaTimes } from "react-icons/fa"
import Image from "next/image"

const Header = () => {
  const Links = [
    { name: "Início", link: "/" },
    { name: "Blog", link: "/" },
  ]
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className=" shadow-md w-full fixed top-0 left-0">
      <div className="md:flex flex items-center justify-between bg-dark py-1 md:py-4 md:px-10 px-3">
        <div className="font-bold text-2x1 text-white cursor-pointer flex items-center font-[Poppins]">
          <Image
            src={"./logo1.svg"}
            alt="photo"
            width={50}
            height={100}
            className="mr-1"
          />{" "}
          | Instituto Aristoteles
        </div>
        <div className="text-3x1 text-white absolute top-6 right-8 md:top-5 flex justify-center cursor-pointer md:hidden">
          <button onClick={toggleMenu}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={` md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-dark
          text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-12 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-x1 md:my-0 my-7">
              <a href={Link.link} className="hover:text-blue duration-500">
                {Link.name}
              </a>
            </li>
          ))}
          <div>
            <Button>Cadastre-se</Button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header
