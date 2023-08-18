import React, { useState, useEffect } from "react";

export default function SpeedTier() {
    const [pokeData, setPokeData] = useState('')
    function getPokemonData() {
        /* get data from maybe pokeAPI */
        /* sort pokemon data by speed tiers */
    }

    useEffect(() => {
        setPokeData(getPokemonData())
    }, [])

    return (
        <div id="SpeedTierDiv">
            {/* for each speed tier in pokeData, get a row*/}
        </div>
    )
}