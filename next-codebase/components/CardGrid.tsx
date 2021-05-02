import { CardGridProps, IPlayerCard } from "../types/types";
import PlayerCard from "./PlayerCard";
import styles from "../pages/App.module.css";
import { useEffect, useState } from "react";

function CardGrid({ players }: CardGridProps) {
  const GET_NUM_COLS = () => {
    if (typeof window === "undefined" || !window) return 3;
    if (window.innerWidth < 550) return 1;
    if (window.innerWidth < 800) return 2;
    return 3;
  };
  const [numCols, setNumCols] = useState<number>(GET_NUM_COLS());
  const PLAYERS_COPY = [...players];
  const NUM_PLAYERS_IN_COL = Math.ceil(players.length / numCols);

  const playerCols: IPlayerCard[][] = [];
  for (let i = 0; i < numCols; i++) {
    playerCols.push(PLAYERS_COPY.splice(0, NUM_PLAYERS_IN_COL));
  }

  useEffect(() => {
    const setter = () => {
      setNumCols(GET_NUM_COLS());
    };

    setter();
    window.addEventListener("resize", () => setter());
    return () => {
      window.removeEventListener("resize", () => setter());
    };
  }, []);

  return (
    <div
      style={{
        columnGap: 20,
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        padding: 10,
      }}
    >
      {playerCols.map((col, idx) => (
        <div className={styles["player-col"]} key={idx}>
          {col.map((player) => (
            <PlayerCard key={player.name} {...player} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
