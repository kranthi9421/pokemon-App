'use client'
import Image from 'next/image'

const PocImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <Image
      src={image}
      alt={'Picture of' + name}
      width="300"
      height="300"
      priority
      style={{ objectFit: 'contain' }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    />
  )
}

export default PocImage
