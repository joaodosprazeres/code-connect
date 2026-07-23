import type { ReactNode } from 'react'
import symbolAPart1 from '../../../assets/login/symbol-a-part1.svg'
import symbolAPart2 from '../../../assets/login/symbol-a-part2.svg'
import symbolBPart1 from '../../../assets/login/symbol-b-part1.svg'
import symbolBPart2 from '../../../assets/login/symbol-b-part2.svg'

export type AuthLayoutProps = {
  banner: ReactNode
  children: ReactNode
}

export function AuthLayout({ banner, children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-grafite">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 hidden h-[487px] w-[407px] opacity-30 lg:block"
      >
        <div className="absolute inset-[25.85%_44.09%_0_0]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={symbolBPart1} />
        </div>
        <div className="absolute inset-[0_0.02%_25.85%_44.09%]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={symbolBPart2} />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 hidden h-[486px] w-[407px] opacity-30 lg:block"
      >
        <div className="absolute inset-[25.85%_44.09%_0_0]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={symbolAPart1} />
        </div>
        <div className="absolute inset-[0_0.02%_25.85%_44.09%]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={symbolAPart2} />
        </div>
      </div>

      <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-[996px] flex-col items-center gap-10 rounded-[32px] border border-grafite bg-cinza-escuro p-8 lg:flex-row lg:justify-between lg:gap-0 lg:p-14">
          {banner}
          {children}
        </div>
      </div>
    </div>
  )
}
