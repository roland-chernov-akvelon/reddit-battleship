import React from "react";
import Cell from "./Cell";

function MissCell(props) {
  return (
    <Cell>
      <span style={{ color: "red" }}>×</span>
    </Cell>
  );
}

export default MissCell;
