import React from "react"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#fffffff19] py-7">
        <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center font-[Poppins]">
          Instituto Aristoteles
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            tenetur quidem similique ducimus!{" "}
          </p>
        </h1>
        <h1 className="flex justify-between space-x-3">
          <a href="/">
            <BsFacebook size={30} />
          </a>
          <a href="/">
            <BsInstagram size={30} />
          </a>
          <a href="/">
            {" "}
            <BsLinkedin size={30} />
          </a>
        </h1>
      </div>

      <hr />
      <div className="grid content-center justify-center  gap-10 text-center pt-2 text-gray-400 text-sm pb-2">
        <span>
          Copyright © Instituto Aristóteles. Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer
