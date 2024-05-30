import {
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useStore } from "../store";
import { Pokemon } from '../types';

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const PokemonSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  const isDarkMode = useStore((state) => state.isDarkMode);

  const fetchPokemons = async () => {
    try {
      const response = await fetch(`${baseUrl}?limit=151`);
      const data = await response.json();
      const detailedData: Pokemon[] = await Promise.all(
        data.results.map((pokemon: any) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      setData(detailedData);
      setFilteredPokemons(detailedData);
    } catch (err) {
      setError("Failed to fetch Pokemons");
    }
  };

  const fetchPokemon = async (name: string) => {
    try {
      const response = await fetch(`${baseUrl}/${name.toLowerCase()}`);
      const data: Pokemon = await response.json();
      setFilteredPokemons([data]);
      setError(null);
    } catch (err) {
      setError("Pokemon not found");
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    fetchPokemon(searchValue);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredPokemons(data);
    }
  }, [searchValue, data]);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          marginBottom: "2rem",
          justifyContent: 'center'
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search for a Pokemon..."
          variant="outlined"
          sx={{
            width: "40vw",
            backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
          }}
          onChange={(e) => {
            handleTyping(e);
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: '20%',
            ml: 2,
            backgroundColor: isDarkMode ? "#2b3743" : "#351950",
            color: isDarkMode ? "#ffffff" : "#ffffff",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            sprites={pokemon.sprites.front_default} 
            types={pokemon.types.map((typeInfo) => typeInfo.type.name)}
            moves={pokemon.moves.slice(0, 5).map((moveInfo) => moveInfo.move.name)}
          />
        ))}
        {error && <Typography variant="body2" color="error">{error}</Typography>}
      </Box>
    </Box>
  );
};

export default PokemonSearch;
