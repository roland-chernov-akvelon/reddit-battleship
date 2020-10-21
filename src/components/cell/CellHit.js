import React from "react";
import Cell from "./Cell";
import styles from "./CellHit.module.css";

function CellHit(props) {
  return (
    <Cell className={styles.cellHit} />
  );
}

export default CellHit;
