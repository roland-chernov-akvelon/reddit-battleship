import React from "react";
import { useSelector } from "react-redux";
import Cell from "../../components/Cell";
import { selectBoardCells } from "./boardSlice";
import styles from "./Board.module.css";

export function Board() {
  const rows = useSelector(selectBoardCells);

  return (
    <table className={styles.grid}>
      {rows.map((row) => (
        <tr>
          {row.map((cell) => (
            <td className={styles.cell}><Cell /></td>
          ))}
        </tr>
      ))}
    </table>
  );
}
