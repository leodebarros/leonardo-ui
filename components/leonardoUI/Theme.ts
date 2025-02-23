import { ColorSchemeName, TextStyle, useColorScheme } from 'react-native';

export type ColorTheme = {
    accentUsageBg: string;
    antiOverBackground: string;
    border: string;
    background: string;
    destructive: string;
    primary: string;
    overBackground: string;
    secondary: string;
    surface: string;
    sidebarBg: string;
    textPrimary: string;
    textSecondary: string;
    textSidebar: string;
    white: string;
};

export type BaseTheme = {
    colors: {
        light: ColorTheme;
        dark: ColorTheme;
    };
    fontSize: {
        xs: number;
        sm: number;
        base: number;
        md: number;
        lg: number;
        xl: number;
    };
    fonts: {
        main: string;
    };
    fontWeight: {
        normal: TextStyle["fontWeight"];
        semibold: TextStyle["fontWeight"];
        bold: TextStyle["fontWeight"];
    };
    borderRadius: {
        sm: number;
        md: number;
        lg: number;
        full: number;
    };
    padding: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    margin: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
};

export type ResolvedTheme = Omit<BaseTheme, 'colors'> & {
    colors: ColorTheme;
};

const lightTemplate: Omit<ColorTheme, 'primary'> = {
    accentUsageBg: "#F4F4F4",
    antiOverBackground: "#111111",
    background: "#FFFFFF",
    border: "#D0D0D0",
    destructive: "#FF4C4C",
    overBackground: "#FFFFFF",
    secondary: "#7F7F7F",
    sidebarBg: "#E6E5E3",
    surface: "#F0F0F0",
    textPrimary: "#2B2B2B",
    textSecondary: "#757575",
    textSidebar: "#444443",
    white: "#FFFFFF",
};

const darkTemplate: Omit<ColorTheme, 'primary'> = {
    accentUsageBg: "#1A1A1A",
    antiOverBackground: "#EAEAEA",
    background: "#121212",
    border: "#333333",
    destructive: "#FF4C4C",
    overBackground: "#1C1C1C",
    secondary: "#B3B3B3",
    sidebarBg: "#1C1C1E",
    surface: "#1E1E1E",
    textPrimary: "#EAEAEA",
    textSecondary: "#B3B3B3",
    textSidebar: "#C6C6C6",
    white: "#FFFFFF",
};

export const baseTheme: BaseTheme = {
    colors: {
        light: {
            primary: '#00B2A9',
            ...lightTemplate,
        },
        dark: {
            primary: '#00B2A9',
            ...darkTemplate,
        },
    },
    fontSize: {
        xs: 9,
        sm: 12,
        base: 15,
        md: 18,
        lg: 21,
        xl: 24,
    },
    fonts: {
        main: 'System',
    },
    fontWeight: {
        normal: '400',
        semibold: '500',
        bold: '700',
    },
    borderRadius: {
        sm: 4,
        md: 8,
        lg: 16,
        full: 9999,
    },
    padding: {
        xs: 2,
        sm: 5,
        md: 10,
        lg: 20,
        xl: 30,
    },
    margin: {
        xs: 3,
        sm: 5,
        md: 10,
        lg: 20,
        xl: 30,
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
};

export function useTheme() {
    const colorScheme: ColorSchemeName = useColorScheme() || 'light';

    return {
        ...baseTheme,
        colors: baseTheme.colors[colorScheme],
    };
}