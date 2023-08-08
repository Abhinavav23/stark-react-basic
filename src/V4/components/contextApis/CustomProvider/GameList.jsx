import React from "react";
import { Games } from "./Games";

export const GameList = () => {
  return (
    <section style={{display: 'flex', flexDirection:'column'}}>
      <div>Games</div>
      <Games />
    </section>
  );
};
