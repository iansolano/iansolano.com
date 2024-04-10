export interface ThemeProps {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    primaryLighten: string;
    black: string;
    white: string;
  };
  spacing: Array<string>;
  percentages: {
    fourth: string;
    third: string;
    half: string;
    full: string;
  };
  breakpoints: Array<number>;
  borderWidths: Array<string>;
  borderRadius: Array<string>;
  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  fontWeights: Array<number>;
  lineHeight: Array<number>;
  letterSpacing: {
    tracked: string;
    trackedTight: string;
    trackedLoose: string;
  };
  transitions: {
    slow: string;
    medium: string;
    fast: string;
  };
  zIndex: Array<number>;
}

const theme: ThemeProps = {
  colors: {
    primary: '#172E4B',
    secondary: '#E1D3C3',
    tertiary: '#976D32',
    primaryLighten: '#B9B2AC',
    black: '#000000',
    white: '#FFFFFF',
  },
  spacing: ['0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem'],
  percentages: {
    fourth: '25%',
    third: '33.3%',
    half: '50%',
    full: '100%',
  },
  breakpoints: [480, 768, 1024, 1280],
  borderWidths: ['0rem', '0.1rem', '0.125rem'],
  borderRadius: ['0.25rem', '100%'],
  fonts: {
    primary: 'Wremena, serif',
    secondary: 'Pitch Sans, sans-serif',
    tertiary: 'Syne, serif',
  },
  fontWeights: [100, 400, 500, 700],
  lineHeight: [1, 1.25, 1.5],
  letterSpacing: {
    tracked: '0.1rem',
    trackedTight: '-0.05rem',
    trackedLoose: '0.25rem',
  },
  transitions: {
    slow: 'all 0.5s ease-in-out',
    medium: 'all 0.25s ease-in-out',
    fast: 'all 0.15s ease-in-out',
  },
  zIndex: [0, 1, 2],
};

export default theme;
