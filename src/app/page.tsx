import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

export default async function Home() {
  return (
    <main className="flex flex-col gap-24">
      <section className="relative bg-home-section bg-no-repeat bg-[length:100%_40%] lg:bg-[length:70%_70%] bg-right-bottom">
        <div className="container flex items-center flex-wrap md:flex-nowrap gap-10">
          <div className="flex flex-col gap-5 xl:gap-10 text-center items-center md:text-left md:items-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-dark-blue leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
              Um projeto idealizado para oferecer{" "}
              <strong>apoio gratuito</strong> a jovens brasileiros na área de{" "}
              <strong>saúde mental</strong>
            </h2>
            <Link
              href="#"
              className="bg-light-green text-white text-base font-bold rounded-full px-10 py-2"
            >
              Saiba Mais
            </Link>

            <div className="flex align-center gap-5">
              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="#"
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="#"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="#"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="#"
                target="_blank"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>

          <Image
            src="/images/ilustracao-home.svg"
            width={500}
            height={500}
            alt=""
            className="w-full md:w-1/2"
            priority
          />
        </div>
      </section>

      <section>
        <div className="container flex items-center justify-center flex-wrap gap-5 md:gap-20 md:justify-stretch md:flex-nowrap">
          <Image
            src="/images/idea.svg"
            width={500}
            height={500}
            alt=""
            className="w-1/3 md:w-1/4"
            priority
          />
          <div className="prose prose-headings:text-dark-blue prose-headings:mb-5 prose-headings:text-center prose-headings:md:text-left prose-p:text-justify max-w-none">
            <h2>Quem somos?</h2>
            <p>
              Somos uma instituição sem fins lucrativos que, através de
              campanhas, eventos e workshops, busca oferecer apoio gratuito a
              jovens brasileiros na área de saúde mental
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex items-center justify-center flex-wrap-reverse gap-5 md:gap-20 md:flex-nowrap">
          <div className="prose prose-headings:text-dark-blue prose-headings:mb-5 prose-headings:text-center prose-headings:md:text-left prose-p:text-justify max-w-none">
            <h2>Nosso Propósito</h2>
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
          <Image
            src="/images/target.svg"
            width={500}
            height={500}
            alt=""
            className="w-1/3 md:w-1/4"
            priority
          />
        </div>
      </section>
    </main>
  )
}
