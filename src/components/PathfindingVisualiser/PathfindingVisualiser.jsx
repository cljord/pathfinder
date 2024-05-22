import React from "react";
import Cell from "./Cell/Cell";

import "./PathfindingVisualiser.css";

const PathfindingVisualiser = () => {
  const grid = [
    ["1", "1", "1"],
    ["1", "0", "1"],
    ["1", "1", "1"]
    ]

  return (
    <div>
    {
      grid.map((row, rowIdx) => {
        return (
          <div key={rowIdx}>
          {
            row.map((cell, colIdx) => {
              return (
                <Cell rowIdx={rowIdx} colIdx={colIdx} cellType={cell} />
              )
            })
          }
          </div>
        )
      })
    }
    </div>
  )
}

export default PathfindingVisualiser;