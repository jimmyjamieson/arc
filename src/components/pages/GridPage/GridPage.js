// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';

const GridsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Grid Example</title>
      </Helmet>
      Grids...
    </PageTemplate>
  );
};

export default GridsPage;
