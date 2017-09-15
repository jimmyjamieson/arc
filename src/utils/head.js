// @flow
import React from 'react';
import Head from 'next/head';

export default (props: Object) => (
  <Head>
    <title>{props.title}</title>
    {props.children}
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);
