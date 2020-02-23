import React, { useState, useEffect } from "react";
import { Grid } from "./Grid";

export function Main() {
  let speed = 100;
  let rows = 30;
  let cols = 50;

  const [generation] = useState(0);
  const [gridFull, updateGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const selectBox = (row, col) => {
    let gridCopy = arrayClone(gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    updateGrid(gridCopy);
  };

  const seed = () => {
    console.log("seed!");
    let gridCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          console.log("random");
          gridCopy[i][j] = true;
        }
      }
    }
    updateGrid(gridCopy);
  };

  // useEffect(() => seed());

  return (
    <div>
      <h1>The Game of Life</h1>
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

const arrayClone = arr => {
  return JSON.parse(JSON.stringify(arr));
};
