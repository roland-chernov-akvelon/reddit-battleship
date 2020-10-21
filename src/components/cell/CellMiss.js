import React from "react";
import Cell from "./Cell";
import styles from "./CellMiss.module.css";

function CellMiss(props) {
  return <Cell className={styles.cellMiss} />;
}

export default CellMiss;
