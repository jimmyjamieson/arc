import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import GlobalTemplate from './templates/GlobalTemplate'

import HomePage from './pages/HomePage/index'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'


injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="%s - Arc">
        <title>Affectli</title>
        <meta name="description" content="React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="ARc" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="https://arc.js.org/icon.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalTemplate>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </GlobalTemplate>
      </ThemeProvider>
    </div>
  )
}

export default App
