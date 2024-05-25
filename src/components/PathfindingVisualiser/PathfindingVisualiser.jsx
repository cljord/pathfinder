import React from "react";
import Cell from "./Cell/Cell";
import Graph from "../../graphs/graphs";

import "./PathfindingVisualiser.css";

const PathfindingVisualiser = () => {
  const grid = [
    ["1", "1", "1"],
    ["1", "0", "1"],
    ["1", "1", "1"]
    ]

  const graph = new Graph();

  return (
    <div>
    {
      grid.map((row, rowIdx) => {
        return (
          <div key={rowIdx}>
          {
            row.map((cell, colIdx) => {
              return (
                <Cell key={colIdx} rowIdx={rowIdx} colIdx={colIdx} cellType={cell} />
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