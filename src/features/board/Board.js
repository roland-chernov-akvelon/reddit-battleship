import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCell from "../../components/Cell";
import HitCell from "../../components/HitCell";
import MissCell from "../../components/MissCell";
import { selectBoardCells, fire } from "./boardSlice";
import { CELL_HIT, CELL_MISS } from "./boardCell.type";
import styles from "./Board.module.css";

export function Board() {
  const dispatch = useDispatch();
  const rows = useSelector(selectBoardCells);

  const mapTypeToCell = (type) => {
    switch (type) {
      case CELL_HIT:
        return HitCell;
      case CELL_MISS:
        return MissCell;
      default:
        return EmptyCell;
    }
  };

  return (
    <table className={styles.grid}>
      <tbody>
        {rows.map((row, x) => (
          <tr key={x}>
            {row.map((cell, y) => {
              const Cell = mapTypeToCell(cell);
              return (
                <td className={styles.cell} key={`${x}:${y}`}>
                  <Cell onClick={() => dispatch(fire([x, y]))} />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
