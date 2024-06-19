import Link from 'next/link'
import PocImage from '../PocImage'

export async function getId(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res.json()
  return data
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const resu = await getId(id)

  return (
    <>
      <span className="text-green-500 text-2xl">
        <Link href="/home">Back</Link>
      </span>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-[500px] h-[700px">
          <div className="w-[500px] h-[350px] flex items-center justify-center bg-green-400">
            <PocImage
              image={resu.sprites.other['official-artwork'].front_default}
              name={id}
            />
          </div>
          <div className="w-[500px] flex flex-col px-[20px] gap-5 py-[50px] h-[350px] bg-yellow-300">
            <h1>Name : {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            <h1>Type : fire,flying</h1>
            <h1>Stats : hp,attack,defense,special-attack</h1>
            <h1>Abilities : blaze, solar power</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
