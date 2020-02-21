import React, { useState } from "react";
import { Grid } from "./Grid";

export function Main() {
  const [generation] = useState(0);
  return (
    <div>
      <h1>The Game of Life</h1>
      <Grid />
      <h2>Generations: {generation}</h2>
    </div>
  );
}
