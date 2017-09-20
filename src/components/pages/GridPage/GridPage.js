// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';
import VirtualizedExampleGrid from '../../../containers/VirtualizedExampleGrid';

const GridsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Grid Example</title>
      </Helmet>
      <VirtualizedExampleGrid />
    </PageTemplate>
  );
};

export default GridsPage;
