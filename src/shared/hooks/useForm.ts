import type { FormEvent, InputHTMLAttributes } from "react"
import { useCallback, useState } from "react"
import { useFormik } from "formik"
import { type Schema } from "yup"

interface UseFormConfig<T extends Record<string, any>> {
  initialValues: T
  schema: Schema
}

export default function useForm<T extends Record<string, any>>(
  config: UseFormConfig<T>,
) {
  const [dirty, setDirty] = useState<Set<keyof T>>(new Set())

  const form = useFormik<T>({
    initialValues: config.initialValues,
    onSubmit: () => {},
    validationSchema: config.schema,
  })

  const markAsDirty = useCallback((field: keyof T) => {
    setDirty((prevState) => prevState.add(field))
  }, [])

  const isValid = useCallback(
    (field: keyof T) => {
      const hasError = !!form.errors[field]
      const isDirty = dirty.has(field)
      return !((isDirty || form.submitCount > 0) && hasError)
    },
    [dirty, form.errors, form.submitCount],
  )

  const handleSubmit = useCallback(
    (handler: (values: T) => Promise<void>) => {
      return async (ev: FormEvent<HTMLFormElement>) => {
        form.handleSubmit(ev)
        if (form.isValid) {
          await form.submitForm()
          await handler(form.values)
        }
      }
    },
    [form],
  )

  const field = useCallback(
    (
      name: keyof T & string,
    ): InputHTMLAttributes<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => {
      return {
        name,
        id: name,
        value: form.values[name],
        onChange: (event) => {
          markAsDirty(name)
          form.handleChange(event)
        },
        onBlur: form.handleBlur,
        ...(!isValid(name)
          ? { "aria-invalid": true, "data-invalid": true }
          : { "data-valid": true }),
      }
    },
    [form, isValid, markAsDirty],
  )

  return { form, isValid, field, handleSubmit }
}
