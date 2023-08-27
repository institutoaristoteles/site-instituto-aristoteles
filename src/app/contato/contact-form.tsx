"use client"

import Button from "@/shared/components/button"
import React, { useState } from "react"
import useForm from "@/shared/hooks/useForm"
import { RequestBodyDto } from "@/app/api/send-mail/route"
import { object, string } from "yup"
import { sendMail } from "@/integration/api"

const schema = object<RequestBodyDto>({
  name: string().required("Este campo é obrigatório"),
  email: string()
    .email("Informe um e-mail válido")
    .required("Este campo é obrigatório"),
  message: string().required("Este campo é obrigatório"),
  subject: string().required("Este campo é obrigatório"),
})

const subjects = {
  other: "Outro",
  volunteer: "Quero ser voluntário",
}

const initialValues: RequestBodyDto = {
  name: "",
  subject: subjects.other,
  message: "",
  email: "",
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const { field, isValid, handleSubmit, form } = useForm<RequestBodyDto>({
    schema,
    initialValues,
  })

  const submitHandler = async (values: RequestBodyDto) => {
    setIsLoading(true)

    try {
      const response = await sendMail(values)
      console.log(response)
    } catch (e) {
      console.error(e)
    } finally {
      form.resetForm()
      setIsLoading(false)
    }
  }

  return (
    <form
      className="flex flex-col items-start gap-3"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="text-sm">
          Nome:
        </label>
        <input
          type="text"
          aria-label="Nome"
          placeholder="Digite seu nome"
          className="p-2 rounded-md border border-[#ccc] w-full max-w-xl data-[invalid]:border-red"
          {...field("name")}
        />
        {!isValid("name") && (
          <small className="text-red text-xs mt-1">{form.errors.name}</small>
        )}
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="email" className="text-sm">
          E-mail:
        </label>
        <input
          type="email"
          aria-label="E-mail"
          placeholder="Digite um endereço de e-mail válido"
          className="p-2 rounded-md border border-[#ccc] w-full max-w-xl data-[invalid]:border-red"
          {...field("email")}
        />
        {!isValid("email") && (
          <small className="text-red text-xs mt-1">{form.errors.email}</small>
        )}
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="subject" className="text-sm">
          Assunto:
        </label>
        <select
          className="p-2 rounded-md border border-[#ccc] w-full max-w-xl data-[invalid]:border-red"
          aria-label="Assunto"
          {...field("subject")}
        >
          {Object.values(subjects).map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        {!isValid("subject") && (
          <small className="text-red text-xs mt-1">{form.errors.subject}</small>
        )}
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="message" className="text-sm">
          Mensagem:
        </label>
        <textarea
          aria-label="Mensagem"
          placeholder="Digite sua mensagem"
          className="p-2 rounded-md border border-[#ccc] w-full max-w-xl data-[invalid]:border-red"
          {...field("message")}
        />
        {!isValid("message") && (
          <small className="text-red text-xs mt-1">{form.errors.message}</small>
        )}
      </div>

      <Button
        type="submit"
        disabled={!form.isValid || isLoading}
        className="disabled:grayscale disabled:opacity-50 disabled:hover:scale-100"
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  )
}
