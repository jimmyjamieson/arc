import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import GlobalTemplate from './templates/GlobalTemplate';
import theme from './themes/default';

import HomePage from './pages/HomePage/index';
import FormsPage from './pages/FormsPage/index';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import GridsPage from './pages/GridPage/GridPage';

injectGlobal`
   *, *:after, *:before {
        box-sizing: border-box;
   }
   html {
    font-size: 1rem;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
   }
  body, main#app, [data-reactroot] {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    margin:0; padding: 0;
    min-height: 100vh;
  }
`;

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="%s - Affectli">
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
            <Route path="/grids" component={GridsPage} exact />
            <Route path="/forms" component={FormsPage} exact />
            <Route path="/charts" component={ChartsPage} exact />
          </Switch>
        </GlobalTemplate>
      </ThemeProvider>
    </div>
  );
};

export default App;
