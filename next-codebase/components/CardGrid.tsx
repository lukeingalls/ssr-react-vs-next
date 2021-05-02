import { CardGridProps } from "../types/types";
import PlayerCard from "./PlayerCard";

function CardGrid({ players }: CardGridProps) {
  return (
    <>
      {players.map((player) => (
        <PlayerCard key={player.name} {...player} />
      ))}
    </>
  );
}

export default CardGrid;
