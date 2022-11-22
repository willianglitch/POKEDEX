import React, { useEffect, useState } from "react";
import { Box,Container } from "@mui/system";
import axios from "axios";
import { NavBar } from "../components/navBar";
import { PokemonCard } from "../components/pokemonCard";
import { Grid } from "@mui/material";



export const Home = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        var endPoints = []
        for (var i = 1; i < 50; i++){
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endPoints.map((endPoint) => 
            axios.get(endPoint))).then((res) => setPokemons(res))
    }

    return(
        <div>
            <NavBar />
            <Container maxWidth="false">
            <Grid container spacing={3}>
                {pokemons.map((pokemon, key) => (
                <Grid item xs={2} key={key}>
                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                </Grid> ))}
            </Grid>
            </Container>
        </div>
    )
}