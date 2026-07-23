import type { ReactNode } from 'react'

export type DividerProps = {
  children: ReactNode
}

export function Divider({ children }: DividerProps) {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="h-px flex-1 bg-cinza-medio" />
      <p className="shrink-0 text-[15px] text-offwhite">{children}</p>
      <div className="h-px flex-1 bg-cinza-medio" />
    </div>
  )
}
