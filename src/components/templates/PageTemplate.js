// @flow
import React from 'react';
import styled from 'styled-components';
import { ChildrenProp } from '../../utils/props';

const PageContentWrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const PageTemplate = (props:Object) => {
  const { children } = props;
  return (
    <PageContentWrapper>
      { children }
    </PageContentWrapper>
  );
};

PageTemplate.propTypes = {
  children: ChildrenProp,
};

export default PageTemplate;
