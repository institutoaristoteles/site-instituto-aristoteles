import React from "react"
import Image from "next/image"
import Header from "./Header"
import Footer from "./Footer"

const Contact = () => {
  return (
    <>
      <Header />
      <main className="mt-16 md:pt-0 w-full h-screen flex  md:items-center flex-col-reverse md:flex-row">
        <div className=" md:w-[40%] mx-4 md:mx-3 pb-7 md:px-[20px] md:py-[20px] flex flex-col gap-4">
          <h2 className="text-2xl md:text-[45px] contact">Contate-Nos</h2>
          <input
            type="text"
            className="w-full md:w-auto p-1 md:px-[12px] md:py-[10px] rounded-md border"
            placeholder="Digite seu nome"
          />
          <input
            type="text"
            className="w-auto p-1 md:px-[12px] md:py-[10px] rounded-md border"
            placeholder="Digite um endereço de e-mail válido"
          />
          <input
            type="text"
            className="w-auto p-1 pb-14 md:px-[12px] md:pb-16 pt-1 rounded-md  border"
            placeholder="Digite sua mensagem"
          />
          <button className="w-24 px-7 py-2.5 text-center bg-orange hover:bg-light-orange rounded-xl font-medium">
            Enviar
          </button>
        </div>
        <div className=" w-full md:w-[60%] h-screen flex items-center justify-center">
          <Image
            className="w-[80%] h-[80%]"
            src={"contact.svg"}
            alt="photo"
            width={100}
            height={100}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact
