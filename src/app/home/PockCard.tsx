import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const PockCard = ({ name, index }: any) => {
  const padIndex = ('00' + (index + 1)).slice(-3)
  return (
    <>
      <div className="w-[400px] h-[400px] shadow-2xl">
        <div className="w-[400px] h-[200px] bg-white flex items-center justify-center">
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padIndex}.png`}
            alt={'Picture of' + name}
            width="200"
            height="200"
            priority
            style={{ objectFit: 'contain' }}
            className="transition-opacity opacity-0 duration-[2s]"
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          />
        </div>
        <div className="w-[400px] h-[200px] bg-slate-50">
          <div className="translate-x-[50px] translate-y-[50px]">
            <h1 className="text-[24px]">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h1>
            <div className="translate-y-[50px]">
              <Link href={`/home/${name}`} className='text-blue-400'>Details-</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PockCard
