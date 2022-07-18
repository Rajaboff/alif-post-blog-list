import React, { useContext } from "react";
import ThemeContext from "../theme-context";

type Props = {
  countFiltering: Function;
  count: number;
};

function LimitFilter({ countFiltering, count }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <div className="ml-[25px]">
      <select
        style={{ background: theme.item }}
        className="rounded-[10px] px-[10px] py-[5px] cursor-pointer"
        value={count}
        onChange={(e) => countFiltering(Number.parseInt(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

export default LimitFilter;
