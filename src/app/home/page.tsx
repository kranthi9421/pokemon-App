import PockList from './PockList'


export async function main() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const resp = await res.json()
  return resp.results
}

const page = async () => {
  const results = await main()

  return (
    <div>
      <PockList results={results} />
    </div>
  )
}

export default page
