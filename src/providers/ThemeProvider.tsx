"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const themeState = useContext(ThemeContext);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={themeState?.theme}>{children}</div>;
  }
};

export default ThemeProvider;
