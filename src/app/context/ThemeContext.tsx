import { createContext, ReactNode, useState, useContext } from 'react';
import { ThemeContextInterface } from 'src/app/context/ThemeContextTypes.ts';

export interface Props {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined,
);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('error context');
  }

  return context;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const value = { isDark, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
