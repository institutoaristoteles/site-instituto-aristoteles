import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import heroImage from "@/assets/images/ilustracao-home.svg"
import ideaImage from "@/assets/images/idea.svg"
import targetImage from "@/assets/images/target.svg"
import justiceImage from "@/assets/images/justice.svg"
import agileImage from "@/assets/images/agile.svg"
import valuesImage from "@/assets/images/values.svg"
import flexibilityImage from "@/assets/images/flexibility.svg"
import shuttleImage from "@/assets/images/shuttle.svg"

async function Home() {
  return (
    <main className="flex flex-col">
      <section
        className={
          "bg-home-section bg-no-repeat bg-[length:100%_40%] lg:bg-[length:70%_70%] bg-right-bottom"
        }
      >
        <div className="container flex items-center flex-wrap md:flex-nowrap gap-10">
          <div className="flex flex-col gap-5 xl:gap-10 text-center items-center md:text-left md:items-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-dark-blue leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
              Um projeto idealizado para oferecer{" "}
              <strong>apoio gratuito</strong> a jovens brasileiros na área de{" "}
              <strong>saúde mental</strong>
            </h2>

            <div className="flex align-center gap-5">
              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="https://www.instagram.com/institutoaristoteles/"
                target="_blank"
                aria-label="Clique aqui para visitar nosso perfil no Instagram"
              >
                <FaInstagram />
              </Link>

              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="https://br.linkedin.com/company/instituto-arist%C3%B3teles"
                target="_blank"
                aria-label="Clique aqui para visitar nosso perfil no Linkedin"
              >
                <FaLinkedin />
              </Link>

              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="https://www.tiktok.com/@institutoaristoteles"
                target="_blank"
                aria-label="Clique aqui para visitar nosso perfil no TikTok"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>

          <Image
            src={heroImage}
            alt=""
            className="mx-auto w-8/12 md:w-1/2 lg:w-8/12"
            priority
          />
        </div>
      </section>

      <section className="prose pt-12 pb-6 md:pt-24 md:py-12">
        <div className="container flex items-center justify-center flex-wrap gap-5 md:gap-20 md:justify-stretch md:flex-nowrap">
          <Image src={ideaImage} alt="" className="w-1/3 md:w-1/6" priority />
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl text-dark-blue mb-5 text-center md:text-left">
              Quem somos?
            </h2>

            <p>
              Somos uma instituição sem fins lucrativos que, através de
              campanhas, eventos e <i lang="en">workshops</i>, busca oferecer
              apoio gratuito a jovens brasileiros na área de saúde mental.
            </p>
          </div>
        </div>
      </section>

      <section className="prose py-6 md:py-12 prose-p:text-justify">
        <div className="container flex items-center justify-center flex-wrap-reverse gap-5 md:gap-20 md:flex-nowrap">
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl text-dark-blue mb-5 text-center md:text-left">
              Nosso Propósito
            </h2>

            <p>
              Nosso objetivo é ajudar cada vez mais jovens que estão sendo
              esquecidos pelo governo e sociedade, propondo ações em diversos
              setores, para que o tema seja discutido e tratado com seriedade.
            </p>
            <p>
              Por meio de parcerias, buscamos apoiar jovens em regiões remotas,
              criar campanhas de conscientização e desenvolver projetos em
              locais públicos, a fim de difundir conhecimento sobre saúde mental
              e gerar impacto positivo.
            </p>
            <p>
              Assim, em conexão com organizações civis, sociais e empresariais,
              procuramos criar uma rede de apoio para que cada vez mais pessoas
              tenham auxílio e incentivo para alcançarem seu melhor potencial.
            </p>
          </div>

          <Image src={targetImage} alt="" className="w-1/3 md:w-1/6" priority />
        </div>
      </section>

      <section className="prose py-6 md:py-12">
        <div className="container">
          <h2 className="font-bold text-2xl lg:text-3xl text-dark-blue mb-10 text-center">
            Princípios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-items-center text-center">
              <Image src={justiceImage} alt="" className="w-1/4 m-0" />
              <p>Transparência e coerência em nossas ações</p>
            </div>

            <div className="flex flex-col items-center justify-items-center text-center">
              <Image src={agileImage} alt="" className="w-1/4 m-0" />
              <p>Respeito pela diversidade</p>
            </div>

            <div className="flex flex-col items-center justify-items-center text-center">
              <Image src={valuesImage} alt="" className="w-1/4 m-0" />
              <p>Fortalecimento de vínculos</p>
            </div>

            <div className="flex flex-col items-center justify-items-center text-center">
              <Image src={flexibilityImage} alt="" className="w-1/4 m-0" />
              <p>Honestidade, liberdade e autonomia</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prose py-6 md:py-12">
        <div className="container">
          <h2 className="font-bold text-2xl lg:text-3xl text-dark-blue mb-5 text-center">
            Metas de atuação
          </h2>

          <div className="flex items-center justify-center flex-wrap-reverse gap-5 md:gap-20 md:flex-nowrap">
            <ul className="text-xl marker:text-dark-blue">
              <li>Apoio à comunidade</li>
              <li>Campanhas</li>
              <li>Oficinas</li>
              <li>Projetos de lei</li>
            </ul>

            <Image src={shuttleImage} alt="" className="w-1/3 md:w-1/6" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
