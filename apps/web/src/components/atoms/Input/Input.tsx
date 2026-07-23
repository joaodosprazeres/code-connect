import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`w-full rounded-[4px] bg-cinza-medio px-4 py-2 text-[15px] text-cinza-escuro placeholder-cinza-escuro/60 outline-none focus:ring-2 focus:ring-verde-destaque ${className ?? ''}`}
      {...rest}
    />
  )
}
