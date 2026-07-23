import { Logo } from '../../atoms/Logo'

export type AuthBannerProps = {
  image: string
  imageAlt: string
}

export function AuthBanner({ image, imageAlt }: AuthBannerProps) {
  return (
    <div className="relative hidden h-full w-[407px] shrink-0 overflow-hidden rounded-[24px] lg:block">
      <img src={image} alt={imageAlt} className="size-full object-cover" />
      <Logo className="absolute bottom-[36px] left-[36px]" />
    </div>
  )
}
