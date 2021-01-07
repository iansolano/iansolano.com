import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  </ThemeProvider>
)

export default App;


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;