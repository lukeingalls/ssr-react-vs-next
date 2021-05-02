export interface IPlayerCard {
  name: string;
  photo_url: string;
  stats?: IStats[];
}

export interface IStats {
  season: string;
  games_played: number;
  games_started: number;
  min: number;
  points: number;
  rebounds: number;
  assists: number;
  blocks: number;
  steals: number;
  fouls: number;
  turnovers: number;
}

export type CardGridProps = {
  players: IPlayerCard[];
};
