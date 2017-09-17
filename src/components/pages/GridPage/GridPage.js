// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';
import ExampleGrid from '../../../containers/ExampleGrid';
import AppBar from '../../atoms/AppBar/AppBar';
import Field from '../../molecules/Field/Field';
import Container from '../../atoms/Container/Container';

const GridsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Grid Example</title>
      </Helmet>
      <AppBar><Field name="search" placeholder="Search..." /></AppBar>
      <Container>
        <ExampleGrid search="" />
      </Container>
    </PageTemplate>
  );
};

export default GridsPage;
