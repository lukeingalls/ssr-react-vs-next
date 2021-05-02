import { GetStaticProps } from "next";
import React from "react";
import CardGrid from "../components/CardGrid";
import CARD_DATA from "../data/PlayerData";
import { CardGridProps } from "../types/types";
import styles from "./App.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const players = CARD_DATA;
  return { props: { players } };
};

function App({ players }: CardGridProps) {
  return (
    <div className={styles["container"]}>
      <CardGrid players={players} />
    </div>
  );
}

export default App;
