import { Box, Button, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useStore } from "../store";
import logo from "../img/logo.png";
const Header = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
        boxShadow: "0px 2px 2px lightgrey",
      }}
    >
      
      <Typography variant="h1" sx={{ fontSize: "1.5rem",fontWeight: 700, color: isDarkMode ? "#ffffff" : "#351950" }}>
      <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '6px',color: isDarkMode ? "#ffffff" : "#351950"}} />
        Pistachio Pokedex
      </Typography>
    
      <Button onClick={toggleDarkMode}  sx={{ backgroundColor: "transparent",color: isDarkMode ? "#ffffff" : "#351950"}}>
        <NightlightRoundIcon  />
        Dark Mode
      </Button>
    </Box>
  );
};

export default Header;



