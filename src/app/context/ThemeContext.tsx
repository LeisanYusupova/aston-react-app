import { createContext, ReactNode, useState, useContext, useMemo } from 'react';
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
  const memoizedValue = useMemo(() => value, [value]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};
