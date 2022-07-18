import React from "react";

export const themes: any = {
  dark: {
    color: "white",
    background: "rgb(31, 31, 31)",
    item: "rgb(44, 44, 44)",
  },
  light: {
    color: "black",
    background: "rgb(247, 242, 234)",
    item: "white",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
