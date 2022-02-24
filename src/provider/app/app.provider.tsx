import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState, useEffect } from "react";
import { blue, grey } from "@mui/material/colors";

interface ColorModeContextProps {
  toggleColorMode: () => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const ColorModeContext = createContext<ColorModeContextProps>({ toggleColorMode: () => {} });

// const getThemeFromLocalStorage: string = () => {};

const getThemeInitialValue = (): "dark" | "light" => {
  const themePersist = localStorage.getItem("theme");
  if (themePersist === "dark") return "dark";
  else if (themePersist === "light") return "light";
  else return "light";
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"dark" | "light">(getThemeInitialValue());
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: blue[700],
                },
                color: {
                  default: grey[50],
                },
              }
            : {}),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
