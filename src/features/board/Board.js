import React from "react";
import { useSelector } from "react-redux";
import Cell from "../../components/Cell";
import { selectBoardCells } from "./boardSlice";
import styles from "./Board.module.css";

export function Board() {
  const rows = useSelector(selectBoardCells);

  return (
    <table className={styles.grid}>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td className={styles.cell} key={`${rowIndex}:${cellIndex}`}>
                <Cell />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
