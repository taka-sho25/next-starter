import clsx from 'clsx'
import type React from 'react'

import { Text } from '@/components/Base/Text'

import styles from './Textarea.module.css'

type Props = {
  id: string
  value?: string
  name?: string
  rows?: number
  cols?: number
  placeholder: string
  disabled?: boolean
  error?: string
  onUpdateValue?: (value: string) => void
}

export const TextArea: React.FC<Props> = ({
  id,
  value = '',
  name = '',
  rows = 2,
  cols = 20,
  placeholder,
  disabled = false,
  error = '',
  onUpdateValue = () => {},
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdateValue(event.target.value)
  }

  return (
    <div>
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
      />
      {error && (
        <Text as='span' size={10} className={clsx(styles['error-message'])}>
          {error}
        </Text>
      )}
    </div>
  )
}
