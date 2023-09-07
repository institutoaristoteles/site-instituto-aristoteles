import React from "react"
import ContactForm from "@/app/contato/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Instituto Aristóteles",
}

function Contact() {
  return (
    <main className="w-full flex justify-start">
      <div className="container">
        <h2 className="text-3xl font-bold text-dark-blue py-5">Contato</h2>

        <ContactForm />
      </div>
    </main>
  )
}

export default Contact
