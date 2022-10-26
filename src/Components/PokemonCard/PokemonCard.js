import React from 'react';
import {Card, PokemonName, PokemonType, EvolveButton} from './styles';



const PokemonCard = ({poke, setPoke}) => {

    const evoluirPokemon = () => {
      setPoke({...poke, evolved: true})  
      console.log(poke)
    }
    
  return (
    <Card color={poke.color}>
        <img src={poke.image} alt={`Pokemon`}/>
        <PokemonName>{poke.name}</PokemonName>
        <PokemonType>{poke.type}</PokemonType>
        <p>{poke.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard