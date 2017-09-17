// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';


const HomePage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Home</title>
      </Helmet>
      Welcome to Affectli
    </PageTemplate>
  );
};

export default HomePage;
