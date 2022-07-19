import React, { useContext } from "react";
import ThemeContext from "../theme-context";

type Props = {
  theme: string;
  setTheme: Function;
};

function ThemeButton({ theme, setTheme }: Props) {
  return (
    <button
      className="ml-[25px]"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <img
        className="hover:scale-[1.15]"
        src={`${process.env.PUBLIC_URL}/assets/${
          theme === "light" ? "moon" : "sun"
        }.svg`}
        alt=""
      />
    </button>
  );
}

export default ThemeButton;
