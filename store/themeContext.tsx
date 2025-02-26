import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import {
  baseTheme,
  ResolvedTheme,
  ColorTheme,
} from "@/components/leonardoUI/Theme";

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const PRIMARY_COLOR_OPTIONS = {
  teal: "#00B2A9",
  blue: "#1E88E5",
  orange: "#FF6D00",
  purple: "#B03FCF",
} as const;

export type PrimaryColorKey = keyof typeof PRIMARY_COLOR_OPTIONS;

type ThemeContextType = {
  theme: ResolvedTheme;
  chosenPrimaryKey: string;
  setPrimaryColor: (key: PrimaryColorKey) => void;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme: ColorSchemeName = useColorScheme() || "light";

  const [chosenPrimaryKey, setPrimaryKey] = useState<string>(
    PRIMARY_COLOR_OPTIONS["blue"]
  );

  const mergedTheme: ResolvedTheme = useMemo(() => {
    const newLight: ColorTheme = {
      ...baseTheme.colors.light,
      primary: chosenPrimaryKey,
    };

    const newDark: ColorTheme = {
      ...baseTheme.colors.dark,
      primary: chosenPrimaryKey,
    };

    return {
      ...baseTheme,
      colors: colorScheme === "dark" ? newDark : newLight,
    };
  }, [chosenPrimaryKey, colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: mergedTheme,
        chosenPrimaryKey,
        setPrimaryColor: (key: PrimaryColorKey) => {
          setPrimaryKey(PRIMARY_COLOR_OPTIONS[key]);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ResolvedTheme {
  return useContext(ThemeContext).theme;
}

export function useThemeActions() {
  const { chosenPrimaryKey, setPrimaryColor } = useContext(ThemeContext);
  return { chosenPrimaryKey, setPrimaryColor };
}
