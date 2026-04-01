import { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'styled-components';
import { GoogleAnalytics } from '@next/third-parties/google';

import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';

import '../styles/custom-fonts.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GoogleAnalytics gaId='G-05D8BMHH8Y' />
      <SpeedInsights />
    </ThemeProvider>
  </>
);

export default App;
