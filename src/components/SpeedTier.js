import React, { useState, useEffect, } from "react";
import { pokedex } from './Pokedex.js'
import { regEList } from './RegEList.js'

import "./pkmnCard.css"
import "./TypeButtons.css"

export default function SpeedTier() {
    const [pokeData, setPokeData] = useState('')
    const [selectedPkmn, setSelectedPkmn] = useState({
        "dexNumber": 1,
        "name": "bulbasaur",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "type1": "grass",
        "type2": "poison",
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sAttack": 65,
        "sDefense": 65,
        "speed": 45
      })

    function getRegEPkmn(pokedex, pokeList){
        let reg_e_data = []
        // let usage_data = []

        // Get reg_e_data
        for(let i = 0; i< pokeList.length; i++){
            reg_e_data.push(pokedex.find(pkmn => pkmn.dexNumber === pokeList[i] ))
        } 
        reg_e_data.sort((a, b) => b.speed - a.speed)
        
        return reg_e_data
    }

    useEffect(() => {
        setPokeData(getRegEPkmn(pokedex, regEList))
    }, [setPokeData])

    function PkmnCard(pokemon) {

        return (
            <div className="container" id={pokemon.name}>
                <div className="row pkmnCard">
                    <div className="col">
                        <span className="speed d-flex align-items-center justify-content-center" style={{width: "100px", height: "100px"}}><h3>{pokemon.speed}</h3></span>
                    </div>
                    <div className="col">
                        <img className="pkmnSprite" src={pokemon.sprite} alt={pokemon.name} />
                    </div>
                    <div className="col">
                        <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
                        <span className={"type-button " + pokemon.type1}>{pokemon.type1}</span> <span className={"type-button " + pokemon.type2}>{pokemon.type2}</span>
                    </div>
                </div>
            </div>
        )
    }

    function PkmnDetail(pokemon) {
        function barColor(stat) {
            if(stat < 60) {
                return "indianred"
            }
            if (stat < 80) {
                return "DarkOrange"
            }
            if(stat < 110) {
                return "Chartreuse"
            }
            if(stat >= 110) {
                return "MediumSeaGreen"
            }
        }

        return(
            <div className="pkmnDetail" id={pokemon.name}>
                <img className="pkmnSprite" src={pokemon.sprite} alt={pokemon.name} />
                <div className="row">
                    <div className="col">
                        <span className="detail-name">
                            <h3 style={{textTransform: "capitalize"}}>{pokemon.name}</h3>
                        </span>
                    </div>
                </div>
                    <div className="detail-types row">
                        <div className="col">
                            <span className= {"type-button " + pokemon.type1}>{pokemon.type1}</span>
                            <span className={"type-button " + pokemon.type2}>{pokemon.type2}</span>
                        </div>
                    </div>
                
                <div id='select-pokemon-stats'>
                    <div className="stat-bar" style={{"--stat": barColor(pokemon.hp), "--bar-value": pokemon.hp/2 + "%"}}><h5>HP: {pokemon.hp}</h5></div>
                    <div className="stat-bar" style={{"--stat": barColor(pokemon.attack),"--bar-value": pokemon.attack/2 + "%"}}><h5>Attack: {pokemon.attack}</h5></div>
                    <div className="stat-bar" style={{"--stat": barColor(pokemon.defense), "--bar-value": pokemon.defense/2 + "%"}}><h5>Defense: {pokemon.defense}</h5></div>
                    <div className="stat-bar" style={{"--stat": barColor(pokemon.sAttack),"--bar-value": pokemon.sAttack/2 + "%"}}><h5>Special Attack: {pokemon.sAttack}</h5></div>
                    <div className="stat-bar" style={{"--stat": barColor(pokemon.sDefense),"--bar-value": pokemon.sDefense/2 + "%"}}><h5>Special Defense: {pokemon.sDefense}</h5></div>
                    <div className="stat-bar" style={{"--stat": barColor(pokemon.speed),"--bar-value": pokemon.speed/2 + "%"}}><h5>Speed: {pokemon.speed}</h5></div>
                </div>
            </div>
        )
    }

    return (
        <div className="container text-center" id="SpeedTierDiv">
            <h1>Welcome to the Pokemon Battle Companion</h1>
            <div className="row">
                <div className="col overflow-auto">
                    <div>
                        <PkmnDetail {...selectedPkmn} />
                    </div>
                </div>

                <div className="col overflow-auto" id="poke-list">
                    {pokeData ?
                        pokeData.map((pokemon) => <div onClick={() => setSelectedPkmn(pokemon)}><PkmnCard {...pokemon} /></div>)
                        : ""
                    }
                </div>
            </div>
            <p onClick={() => console.log('Hi')}>Using pokeapi</p>
        </div>
    )
}