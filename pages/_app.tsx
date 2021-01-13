import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  </ThemeProvider>
);

export default App;
