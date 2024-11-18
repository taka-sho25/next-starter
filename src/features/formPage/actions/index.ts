'use server'

import { z } from 'zod'

import { ApiClient } from '@/lib/api'

export type State = {
  error?: unknown
  message?: string | null
  success?: boolean
}

const FormSchema = z.object({
  text: z.string().max(255),
  freeText: z.string(),
})

const FormOmit = FormSchema.omit({ text: true, freeText: true })

export const submitForm = async (prevState: State, formData: FormData): Promise<State> => {
  const data = FormSchema.safeParse({
    text: formData.get('text'),
    freeText: formData.get('freeText'),
  })
  console.log('data', data)

  try {
    const res = await ApiClient.articles.$post()
    return res
  } catch (error) {
    return {
      message: 'Error: Submit Form',
      error,
    }
  }
}
