import React from 'react';

import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }) {
  const theme = {};
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App;
