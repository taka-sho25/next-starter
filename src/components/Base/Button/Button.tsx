import type React from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<Props> = ({
  type = 'button',
  disabled = false,
  children,
  onClick = () => {},
}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
