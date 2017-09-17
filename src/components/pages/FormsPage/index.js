// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Helmet from 'react-helmet';
import PageTemplate from '../../templates/PageTemplate';
import FormContainer from '../../../containers/Form';


const FormsPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>Forms Example</title>
      </Helmet>
      <FormContainer />
    </PageTemplate>
  );
};

export default FormsPage;
