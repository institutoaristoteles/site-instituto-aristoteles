"use client"

import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Image from "next/image"
import { tv } from "tailwind-variants"
import Link from "next/link"

const menu = tv({
  base: `
    flex
    items-center
    justify-center
    flex-col md:flex-row
    gap-10 md:gap-5
    fixed md:static
    bg-dark-blue bg-opacity-90 md:bg-none
    backdrop-blur md:backdrop-blur-0
    w-screen md:w-auto
    h-screen md:h-auto
    -z-10 md:z-auto
    left-0
    transition-all
    duration-500
    text-2xl md:text-base
  `,
  variants: {
    open: {
      true: "top-0 opacity-100",
      false: "top-0 left-full opacity-0 md:opacity-100",
    },
  },
})

const Links = [
  { name: "Início", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Contato", link: "/contato" },
]

function Header() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <header className="shadow-md w-full sticky top-0 left-0 bg-dark-blue z-10">
      <div className="container flex items-center justify-between py-2">
        <Link
          href="/"
          className="font-bold text-2x1 text-white flex items-center"
        >
          <Image
            src="./logo1.svg"
            alt="Instituto Aristóteles logo"
            width={50}
            height={100}
          />{" "}
          <span className="ml-2">| Instituto Aristoteles</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-3x1 text-white flex justify-center cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={menu({ open })}>
          {Links.map(({ link, name }, index) => (
            <a href={link} className="text-white hover:underline" key={index}>
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
