import React, { useState } from "react";
import { Grid } from "./Grid";

export function Main() {
  let speed = 100;
  let rows = 30;
  let cols = 50;

  const [generation] = useState(0);
  const [gridFull] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  return (
    <div>
      <h1>The Game of Life</h1>
      <Grid 
        gridFull={gridFull}
        rows={rows}
        cols={cols}
      />
      <h2>Generations: {generation}</h2>
    </div>
  );
}
