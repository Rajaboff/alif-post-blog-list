import React, { useContext } from "react";
import ThemeContext from "../theme-context";

type Props = {
  searching: Function;
};

function Search({ searching }: Props) {
  const theme = useContext(ThemeContext);
  let body = document.getElementById("body")!;
  body.style.background = theme.background;
  body.style.color = theme.color;
  return (
    <input
      style={{ background: theme.item }}
      className="w-full rounded-[10px] p-[15px]"
      type="text"
      onChange={(e) => searching(e.target.value)}
      placeholder="Поиск..."
    />
  );
}

export default Search;
