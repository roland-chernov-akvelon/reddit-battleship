import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCell from "../../components/cell/Cell";
import CellHit from "../../components/cell/CellHit";
import CellMiss from "../../components/cell/CellMiss";
import { selectBoardCells, fire } from "./boardSlice";
import { CELL_HIT, CELL_MISS } from "./boardCell.type";
import styles from "./Board.module.css";

export function Board() {
  const dispatch = useDispatch();
  const rows = useSelector(selectBoardCells);

  const mapTypeToCell = (type) => {
    switch (type) {
      case CELL_HIT:
        return CellHit;
      case CELL_MISS:
        return CellMiss;
      default:
        return EmptyCell;
    }
  };

  return (
    <div className={styles.board}>
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
    </div>
  );
}
