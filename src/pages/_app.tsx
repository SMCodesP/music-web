import { dark } from '@/themes';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  );
}
