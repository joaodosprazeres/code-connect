import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'ghost'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  icon?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-verde-destaque text-verde-petroleo font-semibold hover:bg-verde-destaque/90',
  ghost: 'bg-transparent text-offwhite border border-cinza-medio hover:bg-cinza-medio/10',
}

export function Button({
  variant = 'primary',
  icon,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-lg transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className ?? ''}`}
      {...rest}
    >
      {children}
      {icon}
    </button>
  )
}
