export type AuthHeadingProps = {
  title: string
  subtitle: string
}

export function AuthHeading({ title, subtitle }: AuthHeadingProps) {
  return (
    <div className="flex w-full flex-col gap-6 text-offwhite">
      <p className="w-full text-[31px] font-semibold leading-normal">{title}</p>
      <p className="w-full text-[22px] leading-normal">{subtitle}</p>
    </div>
  )
}
