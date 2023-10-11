"use client";
import { createContext, useEffect, useState } from "react";

export type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "",
  toggle: () => {},
});

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value;
  }
};

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage() || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
