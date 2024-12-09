import { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';

interface ProviderProps {
    children: React.ReactNode;
}

interface ThemeContextType {
    currentTheme: ThemeType;
    changeCurrentTheme: (newTheme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: ProviderProps) {
    const persistedTheme = localStorage.getItem('theme') as ThemeType | null;
    const [theme, setTheme] = useState(persistedTheme || 'light');

    const changeCurrentTheme = (newTheme: ThemeType) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.add('[&_*]:!transition-none');
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
        }

        const transitionTimeout = setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none');
        }, 1);

        return () => clearTimeout(transitionTimeout);
    }, [theme]);

    return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>;
}

export const useThemeProvider = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeProvider debe usarse dentro de un ThemeProvider")
    }
    return context
};