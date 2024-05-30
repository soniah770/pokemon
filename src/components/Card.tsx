import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { CardProps } from '../types'; 

const Card: React.FC<CardProps> = ({ name, types, moves, sprites }) => {
  return (
    <MuiCard sx={{ width: "23vw", marginBottom: "2rem" }}>
      <CardMedia sx={{ height: "15vh" }} image={sprites} title={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1.5rem", fontWeight: 600 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Types:</b> {types.join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Moves:</b> {moves.join(", ")}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
