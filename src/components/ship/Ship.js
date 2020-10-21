import React from "react";
import styles from "./Ship.module.css";

function Ship(props) {
  const typeClassName = styles[props.type];
  return <div className={`${styles.ship} ${typeClassName}`}></div>;
}

export default Ship;
