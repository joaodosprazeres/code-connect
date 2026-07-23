import type { ButtonHTMLAttributes } from 'react'

export type SocialLoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string
  label: string
}

export function SocialLoginButton({
  icon,
  label,
  className,
  type = 'button',
  ...rest
}: SocialLoginButtonProps) {
  return (
    <button
      type={type}
      className={`flex flex-col items-center justify-center gap-1 ${className ?? ''}`}
      {...rest}
    >
      <img src={icon} alt="" className="size-8" />
      <span className="text-[12.5px] text-offwhite">{label}</span>
    </button>
  )
}
