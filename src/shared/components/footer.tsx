import React from "react"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"

function Footer() {
  return (
    <footer className="bg-dark text-white bg-dark-blue mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 py-7">
        <h2 className="lg:text-4x1 md:text-dark font-semibold">
          Instituto Aristoteles
        </h2>

        <div className="flex justify-center gap-5 md:gap-10">
          <a href="/" target="_blank">
            <BsFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/institutoaristoteles/">
            <BsInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/instituto-arist%C3%B3teles/?originalSubdomain=br"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-10 text-center pt-2 text-gray-400 text-sm pb-2">
        <small>
          Copyright © Instituto Aristóteles. Todos os direitos reservados
        </small>
      </div>
    </footer>
  )
}

export default Footer
