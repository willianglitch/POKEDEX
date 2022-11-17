import React from "react";
import { Container } from "@mui/system";
import { NavBar } from "../components/navBar";
import { PokemonCard } from "../components/pokemonCard";
import { Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {
    // axios
    // .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    // .then((res) => console.log(res))
    // .cath((err) => console.log(err));

    return(
        <div>
            <NavBar />
            <Container maxWidth="false">
            <Grid container>
                <Grid item xs={3}>
                    <PokemonCard />
                </Grid>
                <Grid item xs={3}>
                    <PokemonCard />
                </Grid>
                <Grid item xs={3}>
                    <PokemonCard />
                </Grid>
                <Grid item xs={3}>
                    <PokemonCard />
                </Grid>
            </Grid>
            </Container>
            
        </div>
    )
}