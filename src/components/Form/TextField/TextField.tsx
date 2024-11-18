import clsx from 'clsx'
import type React from 'react'

import { Text } from '@/components/Base/Text'

import styles from './TextField.module.css'

type Props = {
  id: string
  value?: string
  type?: 'text' | 'number' | 'password'
  name?: string
  placeholder: string
  disabled?: boolean
  error?: string
  onUpdateValue?: (value: string) => void
}

export const TextField: React.FC<Props> = ({
  id,
  value = '',
  type = 'text',
  name = '',
  placeholder,
  disabled = false,
  error = '',
  onUpdateValue = () => {},
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateValue(event.target.value)
  }

  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete='off'
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
