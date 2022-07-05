import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyled from '../common/globalStyled';

function App({ Component, pageProps }) {
  const theme = {};
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App;
