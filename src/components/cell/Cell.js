import React from "react";
import styles from "./Cell.module.css";

function Cell(props) {
  return (
    <div {...props} className={`${styles.cell} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
}

export default Cell;
