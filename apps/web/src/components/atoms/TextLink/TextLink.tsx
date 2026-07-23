import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TextLinkVariant = 'muted' | 'accent'

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: TextLinkVariant
  icon?: ReactNode
}

const variantClasses: Record<TextLinkVariant, string> = {
  muted: 'text-[15px] text-offwhite underline',
  accent: 'text-lg text-verde-destaque',
}

export function TextLink({
  variant = 'muted',
  icon,
  className,
  children,
  href = '#',
  ...rest
}: TextLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 ${variantClasses[variant]} ${className ?? ''}`}
      {...rest}
    >
      {children}
      {icon}
    </a>
  )
}
