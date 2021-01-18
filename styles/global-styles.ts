import { createGlobalStyle } from 'styled-components';
import { media } from './style-utils';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    cursor: url("icons/cursor.svg"), default;
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
`;

export default GlobalStyle;
