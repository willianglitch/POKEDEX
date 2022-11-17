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
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <NavBar />
            <Container maxWidth="false">
            <Grid container>
                {pokemons.map((pokemon, key) => (
                <Grid item xs={3} key={key}>
                    <PokemonCard name={pokemon.name} />
                </Grid> ))}
            </Grid>
            </Container>
        </div>
    )
}