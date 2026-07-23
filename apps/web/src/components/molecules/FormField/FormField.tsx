import type { InputHTMLAttributes } from 'react'
import { Label } from '../../atoms/Label'
import { Input } from '../../atoms/Input'

export type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function FormField({ label, error, id, className, ...rest }: FormFieldProps) {
  const fieldId = id ?? label.replace(/\s+/g, '-').toLowerCase()

  return (
    <div className={`flex w-full flex-col items-start gap-2 ${className ?? ''}`}>
      <Label htmlFor={fieldId}>{label}</Label>
      <Input id={fieldId} {...rest} />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
