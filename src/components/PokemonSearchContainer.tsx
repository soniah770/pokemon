import { Box } from "@mui/material";
import PokemonSearch from "./PokemonSearch";
import Header from "./Header"; // Ensure this import is included

const PokemonSearchContainer = () => {
  return (
    <Box>
      <Header />
      <PokemonSearch/>
    </Box>
  );
};

export default PokemonSearchContainer;
