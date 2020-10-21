import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStats } from "./boardSlice";

export function BoardStats() {
  const stats = useSelector(selectStats);
  // TODO: output hits per each ship type
  return <div>{JSON.stringify(stats)}</div>
}
