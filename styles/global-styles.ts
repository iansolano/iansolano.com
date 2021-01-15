import { createGlobalStyle } from 'styled-components';
import { media } from './style-utils';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    min-height: ${theme.percentages.full};

    ${media.md`
      font-size: 16px;
    `}
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${theme.colors.secondary};
    background: linear-gradient(
      180deg, ${theme.colors.secondary} 0%,
      ${theme.colors.tertiary} ${theme.percentages.full});
    font-family: ${theme.fonts.primary};
    height: ${theme.percentages.full};
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  p {
    margin-top: 0;
  }

  @font-face {
    font-family: 'Wremena';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(/fonts/Wremena-Light.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pitch Sans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/fonts/PitchSans-Medium.woff2) format('woff2');
  }
`;

export default GlobalStyle;
