import logoIconPart1 from '../../../assets/login/logo-icon-part1.svg'
import logoIconPart2 from '../../../assets/login/logo-icon-part2.svg'
import logoWordmark from '../../../assets/login/logo-wordmark.svg'

export type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      role="img"
      aria-label="CodeConnect"
      className={`relative h-[40px] w-[127.258px] overflow-clip ${className ?? ''}`}
    >
      <div className="contents absolute inset-[15.11%_78.6%_6.09%_0]">
        <div className="absolute inset-[35.48%_88.04%_6.09%_0]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={logoIconPart1} />
        </div>
        <div className="absolute inset-[15.11%_78.6%_26.47%_9.43%]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={logoIconPart2} />
        </div>
      </div>
      <div className="absolute inset-[0_0_0_26.88%]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={logoWordmark} />
      </div>
    </div>
  )
}
