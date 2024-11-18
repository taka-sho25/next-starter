'use client'

import { useActionState, useState } from 'react'

import { Button } from '@/components/Base/Button'
import { Text } from '@/components/Base/Text'
import { TextField } from '@/components/Form/TextField'
import { TextArea } from '@/components/Form/Textarea'

import { type State, submitForm } from './actions'

export const FormPageForm = () => {
  const initialState: State = {
    error: {},
    message: null,
    success: false,
  }
  const [state, formAction] = useActionState(submitForm, initialState)
  const [text, setText] = useState('')
  const [freeText, setFreeText] = useState('')

  return (
    <form action={formAction}>
      <TextField
        id='text'
        value={text}
        name='text'
        type='text'
        placeholder='text'
        onUpdateValue={(value) => setText(value)}
      />
      <TextArea
        id='freeText'
        value={freeText}
        name='freeText'
        placeholder='free text'
        onUpdateValue={(value) => setFreeText(value)}
      />
      {state?.message && <Text>{state.message}</Text>}
      <Button type='submit'>submit</Button>
    </form>
  )
}
