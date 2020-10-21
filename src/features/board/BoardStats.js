import React from "react";
import { useSelector } from "react-redux";
import { selectStats } from "./boardSlice";
import ShipStat from "../../components/shipStat/ShipStat";

export function BoardStats() {
  const stats = useSelector(selectStats);

  return (
    <div>
      {Object.keys(stats).map((shipType) => (
        <ShipStat
          shipType={shipType}
          size={stats[shipType].size}
          hits={stats[shipType].hits}
        />
      ))}
    </div>
  );
}
