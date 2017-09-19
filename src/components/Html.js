/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Html = ({ styles, assets, state, content }) => {
  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {assets.css.map(path => <link rel="stylesheet" type="text/css" key={path} href={path} />)}
        {styles}
        <link rel="manifest" href="/manifest/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/manifest/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/manifest/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/manifest/img/favicon-16x16.png" />
        <link rel="mask-icon" href="/manifest/img/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/manifest/img/favicon.ico" />
        <meta name="msapplication-config" content="/manifest/img/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body {...bodyAttrs}>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {assets.js.map(path => <script key={path} src={path} />)}
      </body>
    </html>
  );
};

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  assets: PropTypes.shape({
    css: PropTypes.array.isRequired,
    js: PropTypes.array.isRequired,
  }).isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Html;
