// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from '../../atoms/Icon/Icon'
import IconMenu from '../../molecules/Icons/IconMenu'
// import OfflineIndicator from '../../molecules/OfflineIndicator/OfflineIndicator';

const GlobalHeaderStyle = styled.div`
  background: lightseagreen;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const GlobalHeader = () => (
  <GlobalHeaderStyle>
    <div>Starter <Icon icon="menu" /> <IconMenu /> <IconMenu /></div>
    <div>
    menu
    </div>
    <div>{/* <OfflineIndicator /> */}</div>
  </GlobalHeaderStyle>
)

export default GlobalHeader
