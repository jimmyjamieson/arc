import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';
import PieChart from '../../molecules/Charts/pie';

const ChartsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Chart Example</title>
      </Helmet>
      <PieChart />
    </PageTemplate>
  );
};

export default ChartsPage;
