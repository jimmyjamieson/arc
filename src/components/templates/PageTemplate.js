// @flow
import React from 'react';
import styled from 'styled-components';
import GlobalTemplate from '../templates/GlobalTemplate';

const PageContentWrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: calc(60px + 1rem) 1rem 1rem 1rem;
`;

const PageTemplate = (props:Object) => {
  const { children } = props;
  return (
    <GlobalTemplate>
      <PageContentWrapper>
        { children }
      </PageContentWrapper>
    </GlobalTemplate>
  );
};

export default PageTemplate;
