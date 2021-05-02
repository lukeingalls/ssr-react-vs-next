import React, { useEffect, useState } from "react";
import CARD_DATA, { IPlayerCard } from "./PlayerData";
import "./App.css";

const SHOW_STATS = true;

type CardGridProps = {
  players: IPlayerCard[];
};

function PlayerCard({ name, photo_url, stats }: IPlayerCard) {
  return (
    <div className="player-card__container">
      <img src={photo_url} alt={name} />
      <p className="player-name">{name}</p>
      {SHOW_STATS && stats && (
        <table>
          <thead>
            <tr>
              <td>Season</td>
              {/* <td>GP</td> */}
              {/* <td>GS</td> */}
              {/* <td>MIN</td> */}
              <td>REB</td>
              <td>AST</td>
              <td>BLK</td>
              <td>STL</td>
              {/* <td>PF</td> */}
              {/* <td>TO</td> */}
              <td>PTS</td>
            </tr>
          </thead>
          <tbody>
            {stats.map((year) => (
              <tr>
                <td>{year.season}</td>
                {/* <td>{year.games_played}</td> */}
                {/* <td>{year.games_started}</td> */}
                {/* <td>{year.min}</td> */}
                <td>{year.rebounds}</td>
                <td>{year.assists}</td>
                <td>{year.blocks}</td>
                <td>{year.steals}</td>
                {/* <td>{year.fouls}</td> */}
                {/* <td>{year.turnovers}</td> */}
                <td>{year.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function CardGrid({ players }: CardGridProps) {
  const GET_NUM_COLS = () => {
    if (window.innerWidth < 550) return 1;
    if (window.innerWidth < 800) return 2;
    return 3;
  };
  const [numCols, setNumCols] = useState(GET_NUM_COLS());
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
        <div className="player-col" key={idx}>
          {col.map((player) => (
            <PlayerCard key={player.name} {...player} />
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <CardGrid players={CARD_DATA} />
    </div>
  );
}

export default App;
