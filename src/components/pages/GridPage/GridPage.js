// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';
import ExampleGrid from '../../../containers/ExampleGrid';

const GridsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Grid Example</title>
      </Helmet>
      <ExampleGrid />
    </PageTemplate>
  );
};

export default GridsPage;
