import React, { useState, useEffect, useCallback } from "react";
import { pokedex } from './Pokedex.js'
import { regEList } from './RegEList.js'

export default function SpeedTier() {
    const [pokeData, setPokeData] = useState('')
    const Pokedex = require('pokeapi-js-wrapper')
    const P = new Pokedex.Pokedex()
    
    const rawPkmnString = "ariados yanmega quagsire mightyena volbeat illumise crawdaunt leavanny ribombee arbok pikachu raichu victreebel furret staraptor lurantis flapple appletun dipplin ninetales poliwrath politoed gyarados noctowl ambipom heracross mamoswine stantler shiftry gardevoir gallade kricketune pachirisu lucario lilligant trevenant lycanroc-midday lycanroc-dusk lycanroc-midnight greedent toedscruel sinistcha arcanine golem sudowoodo conkeldurr noivern barraskewda hatterene morpeko-full-belly orthworm maushold annihilape snorlax ludicolo probopass luxray vikavolt oricorio-baile sandslash gengar gliscor houndoom grumpig mandibuzz mudsdale kommo-o bombirdier weezing mienshao dusclops dusknoir chimecho magcargo chandelure masquerain clefairy clefable bronzong glimmora milotic dudunsparce whiscash garchomp carbink salazzle weavile glalie froslass eelektross goodra swanna drednaw cramorant bisharp kingambit mimikyu-disguised grimmsnarl indeedee-female basculegion-male ursaluna okidogi munkidori fezandipiti ogerpon"

    function getRegEPkmn(pokedex, pokeList){
        let reg_e_data = []
        for(let i = 0; i< pokeList.length; i++){
            reg_e_data.push(pokedex.find(pkmn => pkmn.dexNumber === pokeList[i] ))
        } 

        reg_e_data.sort((a, b) => b.speed - a.speed)
        return reg_e_data
    }

    const getPokemonInfo = useCallback(async () => {
        let pokeGroup = []
        
        let pkmnNames = rawPkmnString.split(" ")
        for (let i = 0; i < pkmnNames.length; i++) {
            pokeGroup.push(await P.getPokemonByName(pkmnNames[i]))
        }
        pokeGroup.sort((a, b) => b.stats[5].base_stat - a.stats[5].base_stat )

        // const groupByCat = pokeGroup.reduce((group, pokemon) => {
        //     const base_stat = pokemon.stats[5].base_stat
        //     group[base_stat] = group[base_stat] ?? []
        //     group[base_stat].push(pokemon)
        //     return group
        // }, {})
        setPokeData(pokeGroup)
    }, [])

    useEffect(() => {
        setPokeData(getRegEPkmn(pokedex, regEList))
    }, [])

    const showPokemon = (pokeGroup) => {
        return (pokeGroup.forEach(teir => teir.map(pokemon => <h1>{pokemon.name}</h1>)))
    }

    function PkmnCard (pokemon) {
        return (
            <div className="pkmnCard" id={pokemon.name}>
                <img src={pokemon.sprites.front_default}></img>
                <h3 style={{textTransform: "uppercase"}}>{pokemon.stats[5].base_stat} { pokemon.name }</h3>
            </div>
        )
    }

    function PkmnCardV2 (pokemon) {
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
                pokeData.map((pokemon) => <PkmnCardV2 {...pokemon} />)
                : ""
            } 

            <p>Using pokeapi</p>
        </div>
    )
}