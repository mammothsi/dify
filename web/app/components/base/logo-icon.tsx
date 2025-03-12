import Link from 'next/link'
import Image from 'next/image'

type LogoIconProps = {
  size?: 'large' | 'normal' | 'small'
  href?: string
}

export default function LogoIcon({ size = 'normal', href }: LogoIconProps) {
  const dimensions = {
    large: { width: 36, height: 36 },
    normal: { width: 24, height: 24 },
    small: { width: 20, height: 20 },
  }

  const Logo = (
    <Image
      src="/logo.svg"
      alt="Vika"
      width={dimensions[size].width}
      height={dimensions[size].height}
      className="cursor-pointer"
    />
  )

  if (href) {
    return (
      <Link href={href}>
        {Logo}
      </Link>
    )
  }

  return Logo
}
