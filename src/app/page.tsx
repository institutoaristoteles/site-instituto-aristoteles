import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default async function Home() {
  return (
    <main>
      <section className="my-10">
        <div className="container flex items-center flex-col md:flex-row">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl">Um projeto idealizado para oferecer <strong>apoio gratuito</strong> a jovens brasileiros na área de <strong>saúde mental</strong></h1>
            <Link href="#">Saiba Mais</Link>
            <div className="flex align-center gap-5">
              <Link  className="text-3xl" href="#" target="_blank">
                <FaFacebook />
              </Link>
              <Link className="text-3xl" href="#" target="_blank">
                <FaInstagram />
              </Link>
              <Link  className="text-3xl" href="#" target="_blank">
                <FaLinkedin />
              </Link>

            </div>

          </div>
          <Image src="/images/home-background.svg" width={500} height={500} alt=""></Image>
        </div>
      </section>
    </main>
  )
}
