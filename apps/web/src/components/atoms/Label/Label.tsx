import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({ className, children, ...rest }: LabelProps) {
  return (
    <label className={`text-lg text-offwhite ${className ?? ''}`} {...rest}>
      {children}
    </label>
  )
}
