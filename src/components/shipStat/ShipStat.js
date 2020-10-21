import React from "react";
import Ship from "../ship/Ship";
import styles from "./ShipStat.module.css";

function ShipStat(props) {
  const { shipType, size, hits } = props;
  const empty = size - hits;

  return (
    <div className={styles.shipStats}>
      <div>
        <Ship type={shipType} />
      </div>
      <div className={styles.indicators}>
        {[...Array(hits)].map(() => (
          <div className={`${styles.hit} ${styles.indicator}`}></div>
        ))}
        {[...Array(empty)].map(() => (
          <div className={`${styles.empty} ${styles.indicator}`}></div>
        ))}
      </div>
    </div>
  );
}

export default ShipStat;
