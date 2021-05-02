import { IPlayerCard } from "../types/types";
import styles from "../pages/App.module.css";

function PlayerCard({ name, photo_url, stats }: IPlayerCard) {
  const SHOW_STATS = true;

  return (
    <div className={styles["player-card__container"]}>
      <img src={photo_url} alt={name} />
      <p className={styles["player-name"]}>{name}</p>
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

export default PlayerCard;
