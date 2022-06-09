import React from 'react'
const [pokemon, setPokemon] = useState([])

useEffect(()=>{
  fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
  .then(resp => resp.json())
  .then(resp => setPokemon(resp.results))
},[])

const fetch = () => {
  return (
    <div>
        <h1>Fetch</h1>
        <p>
        {pokemon.map((poke) => (
          <h2 key={poke.name}>{poke.name}</h2>
        ))}
    </p>


    </div>

    
  )
}

export default fetch