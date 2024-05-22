import React from "react";

import "./Cell.css";

const Cell = ({ colIdx, rowIdx, cellType }) => {
  return (
    <div className="cell">{cellType}</div>
  )
}

export default Cell;