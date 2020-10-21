import React from "react";
import styles from "./Cell.module.css";

function Cell(props) {
  return (
    <div {...props} className={styles.cell}>
      {props.children}
    </div>
  );
}

export default Cell;
