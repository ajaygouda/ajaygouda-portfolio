import React, { createContext, useContext, useState, useEffect } from 'react';

export type PastelThemeId = 'sage' | 'lavender' | 'sky' | 'peach' | 'rose' | 'mint';

export interface PastelThemeOption {
  id: PastelThemeId;
  name: string;
  label: string;
  dotColor: string;
  accentHex: string;
  pastelBgHex: string;
  pastelBorderHex: string;
}

export const PASTEL_THEMES: PastelThemeOption[] = [
  {
    id: 'sage',
    name: 'Sage',
    label: 'Sage Green',
    dotColor: '#2d6a4f',
    accentHex: '#2d6a4f',
    pastelBgHex: '#edf6f1',
    pastelBorderHex: '#d2e8dc',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    label: 'Lilac & Lavender',
    dotColor: '#6b46c1',
    accentHex: '#6b46c1',
    pastelBgHex: '#f6f2fc',
    pastelBorderHex: '#e6daf7',
  },
  {
    id: 'sky',
    name: 'Sky',
    label: 'Soft Sky Blue',
    dotColor: '#0284c7',
    accentHex: '#0284c7',
    pastelBgHex: '#f0f7ff',
    pastelBorderHex: '#d0e6fb',
  },
  {
    id: 'peach',
    name: 'Peach',
    label: 'Apricot Peach',
    dotColor: '#c05621',
    accentHex: '#c05621',
    pastelBgHex: '#fef5ee',
    pastelBorderHex: '#fedec5',
  },
  {
    id: 'rose',
    name: 'Rose',
    label: 'Blush Rose',
    dotColor: '#db2777',
    accentHex: '#db2777',
    pastelBgHex: '#fdf2f6',
    pastelBorderHex: '#f9d0e1',
  },
  {
    id: 'mint',
    name: 'Mint',
    label: 'Seafoam Mint',
    dotColor: '#0f766e',
    accentHex: '#0f766e',
    pastelBgHex: '#f0fdf9',
    pastelBorderHex: '#cbf3e6',
  },
];

interface ThemeContextType {
  theme: PastelThemeId;
  currentThemeConfig: PastelThemeOption;
  setTheme: (theme: PastelThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'sage',
  currentThemeConfig: PASTEL_THEMES[0],
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<PastelThemeId>(() => {
    try {
      const saved = localStorage.getItem('ajay_portfolio_pastel_theme');
      if (saved && ['sage', 'lavender', 'sky', 'peach', 'rose', 'mint'].includes(saved)) {
        return saved as PastelThemeId;
      }
    } catch {
      // ignore
    }
    return 'sage';
  });

  const setTheme = (newTheme: PastelThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('ajay_portfolio_pastel_theme', newTheme);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-pastel-theme', theme);
  }, [theme]);

  const currentThemeConfig = PASTEL_THEMES.find((t) => t.id === theme) || PASTEL_THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, currentThemeConfig, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
