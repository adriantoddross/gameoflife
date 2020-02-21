import React, { useState } from "react";
import ReactDOM from "react-dom";

export function Main() {
  const [generation] = useState(0);
    return (
      <div>
        <h1>The Game of Life</h1>
        <h2>Generations: {generation}</h2>
      </div>
    );

}
