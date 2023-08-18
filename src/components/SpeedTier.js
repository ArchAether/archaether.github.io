import React, { useState, useEffect, useCallback } from "react";

export default function SpeedTier() {
    const [pokeData, setPokeData] = useState('')
    const Pokedex = require('pokeapi-js-wrapper')
    const P = new Pokedex.Pokedex()
    const pokemonInSV = [
        "miraidon"
    ]

    const getPokemonInfo = useCallback(async () => {
        let res = await P.getPokemonByName(pokemonInSV[0])
        console.log(res)
        setPokeData(res)
    }, [])

    useEffect(() => {
        getPokemonInfo()
    }, [getPokemonInfo])

    return (
        <div id="SpeedTierDiv">
            <h1>Welcome to the Pokemon Battle Companion!</h1>

            {pokeData ?
                <div>
                    <img src = { pokeData.sprites.front_default }></img>
                    <h1 style={{textTransform: "uppercase"}}>{ pokeData.name } </h1>
                    { pokeData.stats[5].base_stat }
                
                </div>
                : ""
            }
            
            
            
        </div>
    )
}