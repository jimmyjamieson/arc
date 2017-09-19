// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';


const Error404 = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>404 - Page Not Found!</title>
      </Helmet>
      Sorry buddy, this page was not found. Maybe it was removed or you typed the wrong url.
    </PageTemplate>
  );
};

export default Error404;
