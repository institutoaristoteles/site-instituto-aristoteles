import React from "react"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-dark text-white bg-dark-blue mt-32">
      <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 py-7">
        <h2 className="lg:text-4x1 md:text-dark font-semibold">
          Instituto Aristoteles
        </h2>

        <div className="flex justify-center gap-5 md:gap-10">
          <Link
            className="text-xl"
            href="https://www.instagram.com/institutoaristoteles/"
            target="_blank"
            aria-label="Clique aqui para visitar nosso perfil no Instagram"
          >
            <FaInstagram />
          </Link>

          <Link
            className="text-xl"
            href="https://br.linkedin.com/company/instituto-arist%C3%B3teles"
            target="_blank"
            aria-label="Clique aqui para visitar nosso perfil no Linkedin"
          >
            <FaLinkedin />
          </Link>

          <Link
            className="text-xl"
            href="https://www.tiktok.com/@institutoaristoteles"
            target="_blank"
            aria-label="Clique aqui para visitar nosso perfil no TikTok"
          >
            <FaTiktok />
          </Link>
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
