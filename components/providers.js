"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [data, setData] = useState({
    result: null,
    tools: null,
  });
  const handleDataChange = (e) => {
    setData((prevState) => {
      const newState = { ...prevState };
      Object.entries(e).forEach(([key, value]) => {
        newState[key] = value;
      });
      return newState;
    });
  };
  return (
    <ThemeContext.Provider value={{ data, handleDataChange }}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
