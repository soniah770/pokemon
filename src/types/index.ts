export type Pokemon = {
  name: string;
  types: { type: { name: string } }[];
  moves: { move: { name: string } }[];
  sprites: { front_default: string };
};

export type CardProps = {
  name: string;
  types: string[];
  moves: string[];
  sprites: string;
};
