import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default async function Home() {
  return (
    <main>
      <section>
        <div className="container flex items-center flex-wrap-reverse md:flex-nowrap ">
          <div className="flex flex-col gap-5 text-center items-center md:text-left md:items-start">
            <h2 className="text-xl text-dark-blue leading-normal md:text-3xl">Um projeto idealizado para oferecer <strong>apoio gratuito</strong> a jovens brasileiros na área de <strong>saúde mental</strong></h2>
            <Link href="#" className="bg-light-green text-white text-base font-bold rounded-full px-10 py-2">Saiba Mais</Link>

            <div className="flex align-center gap-5">
              <Link className="text-2xl text-dark-blue" href="#" target="_blank">
                <FaFacebook />
              </Link>
              <Link className="text-2xl text-dark-blue" href="#" target="_blank">
                <FaInstagram />
              </Link>
              <Link className="text-2xl text-dark-blue" href="#" target="_blank">
                <FaLinkedin />
              </Link>

            </div>

          </div>
          <Image src="/images/hero.svg" width={500} height={500} alt="" className="w-full md:w-1/2" priority/>
        </div>
      </section>
    </main>
  )
}
