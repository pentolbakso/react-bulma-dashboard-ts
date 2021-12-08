import React from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

const ToggleInput = ({ active }: { active: boolean }) => {
  return <>{active ? <FiToggleRight color="#00cc00" /> : <FiToggleLeft color="#cc0000" />}</>;
};
export default ToggleInput;
