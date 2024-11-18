import clsx from 'clsx'
import type React from 'react'

import styles from './Text.module.css'

type Props = {
  as?: 'div' | 'p' | 'span' | 'label'
  size?: number
  weight?: 'light' | 'medium' | 'bold'
  lineClamp?: number
  children: React.ReactNode
  className?: string
}

export const Text: React.FC<Props> = ({
  as = 'div',
  size = 14,
  weight = 'medium',
  lineClamp = 0,
  children,
  className = '',
}) => {
  const Tag = as

  // Line clamp style
  const lineClampStyle: React.CSSProperties = lineClamp
    ? {
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: lineClamp,
      }
    : {}

  return (
    <Tag
      className={clsx(styles.text, styles[`text-${weight}`], className)}
      style={{ ...lineClampStyle, fontSize: `${size}px` }}>
      {children}
    </Tag>
  )
}
