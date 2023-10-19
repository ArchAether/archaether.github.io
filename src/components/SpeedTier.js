import React, { useState, useEffect, useCallback } from "react";
import { pokedex } from './Pokedex.js'
import { regEList } from './RegEList.js'

export default function SpeedTier() {
    const [pokeData, setPokeData] = useState('')

    function getRegEPkmn(pokedex, pokeList){
        let reg_e_data = []
        for(let i = 0; i< pokeList.length; i++){
            reg_e_data.push(pokedex.find(pkmn => pkmn.dexNumber === pokeList[i] ))
        } 

        reg_e_data.sort((a, b) => b.speed - a.speed)
        return reg_e_data
    }

    useEffect(() => {
        setPokeData(getRegEPkmn(pokedex, regEList))
    }, [])

    const showPokemon = (pokeGroup) => {
        return (pokeGroup.forEach(teir => teir.map(pokemon => <h1>{pokemon.name}</h1>)))
    }

    function PkmnCard (pokemon) {
        return (
            <div className="pkmnCard" id={pokemon.name}>
                <img src={pokemon.sprite}></img>
                <h3 style={{textTransform: "uppercase"}}>{pokemon.speed} { pokemon.name }</h3>
            </div>
        )
    }
    
    return (
        <div id="SpeedTierDiv">
            <h1>Welcome to the Pokemon Battle Companion!</h1>

            {pokeData ?
                pokeData.map((pokemon) => <PkmnCard {...pokemon} />)
                : ""
            } 

            <p>Using pokeapi</p>
        </div>
    )
}