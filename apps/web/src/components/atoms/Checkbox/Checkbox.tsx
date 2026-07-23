import type { InputHTMLAttributes } from 'react'
import { Check } from 'lucide-react'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Checkbox({ label, className, id, ...rest }: CheckboxProps) {
  const checkboxId = id ?? label.replace(/\s+/g, '-').toLowerCase()

  return (
    <label
      htmlFor={checkboxId}
      className={`flex cursor-pointer items-center gap-2 ${className ?? ''}`}
    >
      <span className="relative flex size-6 shrink-0 items-center justify-center rounded-[4px] border-2 border-cinza-medio p-1">
        <input
          id={checkboxId}
          type="checkbox"
          className="peer absolute inset-0 size-full cursor-pointer opacity-0"
          {...rest}
        />
        <Check className="pointer-events-none hidden size-4 text-offwhite peer-checked:block" aria-hidden />
      </span>
      <span className="text-[15px] text-cinza-medio">{label}</span>
    </label>
  )
}
