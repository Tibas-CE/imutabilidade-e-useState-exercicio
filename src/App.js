import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';
import { GlobalStyles } from './GlobalStyles';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const pokemons = [{
  name: "Pichu",
  type: "Electric",
  evolved: false,
  weight: 2,
  color: 'yellow',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
  id: 0
},
{
  name: "Pikachu",
  type: "Electric",
  evolved: false,
  weight: 6,
  color: 'yellow',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
  id: 0
},
{
  name: "Raichu",
  type: "Electric",
  evolved: false,
  weight: 30,
  color: 'orange',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png',
  id: 0
}]

function App() {
  const [pokemon, setPokemon] = useState(pokemons)

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard poke={pokemon[0]} setPoke={setPokemon}/>
      <PokemonCard poke={pokemon[1]} setPoke={setPokemon}/>
      <PokemonCard poke={pokemon[2]} setPoke={setPokemon}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
