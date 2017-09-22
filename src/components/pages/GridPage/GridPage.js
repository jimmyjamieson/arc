// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';
import PeopleGridContainer from '../../../containers/PeopleGridContainer';

const GridsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Grid Example</title>
      </Helmet>
      <PeopleGridContainer />
    </PageTemplate>
  );
};

export default GridsPage;
