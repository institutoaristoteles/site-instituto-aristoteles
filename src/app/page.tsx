import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import { NGO } from "schema-dts"
import Script from "next/script"

async function Home() {
  /** @type {import('schema-dts').Article} */
  const schema: NGO = {
    "@type": "NGO",
    name: "Instituto Aristoteles",
    image:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc684673-302a-43e2-b6f7-9e0a85f79cfd%2F130166154.jpg?table=block&id=05cdebe4-7df1-4a8f-ac08-5700b57e1578&spaceId=f5abbaee-0450-4bd0-be59-3e292c451afa&width=2000&userId=8e971664-330f-4eea-b68a-d0e3f37dd0f0&cache=v2",
    foundingDate: new Date().toISOString(),
  }

  return (
    <main className="flex flex-col">
      <Script
        id="ngo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        key="product-jsonld"
      />

      <section className="bg-home-section bg-no-repeat bg-[length:100%_40%] lg:bg-[length:70%_70%] bg-right-bottom pt-24">
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
              >
                <FaInstagram />
              </Link>

              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="https://br.linkedin.com/company/instituto-arist%C3%B3teles"
                target="_blank"
              >
                <FaLinkedin />
              </Link>

              <Link
                className="text-2xl xl:text-3xl text-dark-blue"
                href="https://www.tiktok.com/@institutoaristoteles"
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
            className="mx-auto w-8/12 md:w-1/2 lg:w-8/12"
            priority
          />
        </div>
      </section>

      <section className="prose pt-12 pb-6 md:pt-24 md:py-12">
        <div className="container flex items-center justify-center flex-wrap gap-5 md:gap-20 md:justify-stretch md:flex-nowrap">
          <Image
            src="/images/idea.svg"
            width={500}
            height={500}
            alt=""
            className="w-1/3 md:w-1/6"
            priority
          />
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl text-dark-blue mb-5 text-center md:text-left">
              Quem somos?
            </h2>

            <p>
              Somos uma instituição sem fins lucrativos que, através de
              campanhas, eventos e workshops, busca oferecer apoio gratuito a
              jovens brasileiros na área de saúde mental.
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

          <Image
            src="/images/target.svg"
            width={500}
            height={500}
            alt=""
            className="w-1/3 md:w-1/6"
            priority
          />
        </div>
      </section>

      <section className="prose py-6 md:py-12">
        <div className="container">
          <h2 className="font-bold text-2xl lg:text-3xl text-dark-blue mb-10 text-center">
            Princípios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-items-center text-center">
              <Image
                src="/images/justice.svg"
                width={200}
                height={200}
                alt=""
                className="w-1/4 m-0"
              />
              <p>Transparência e coerência em nossas ações</p>
            </div>

            <div className="flex flex-col items-center justify-items-center text-center">
              <Image
                src="/images/agile.svg"
                width={200}
                height={200}
                alt=""
                className="w-1/4 m-0"
              />
              <p>Respeito pela diversidade</p>
            </div>

            <div className="flex flex-col items-center justify-items-center text-center">
              <Image
                src="/images/values.svg"
                width={200}
                height={200}
                alt=""
                className="w-1/4 m-0"
              />
              <p>Fortalecimento de vínculos</p>
            </div>

            <div className="flex flex-col items-center justify-items-center text-center">
              <Image
                src="/images/flexibility.svg"
                width={200}
                height={200}
                alt=""
                className="w-1/4 m-0"
              />
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

            <Image
              src="/images/shuttle.svg"
              width={500}
              height={500}
              alt=""
              className="w-1/3 md:w-1/6"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
