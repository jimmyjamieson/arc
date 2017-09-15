// @flow
import React from 'react'
import styled from 'styled-components'
// import OfflineIndicator from '../../molecules/OfflineIndicator/OfflineIndicator';
import IconMenu from '../../molecules/Icons/IconMenu'


const GlobalHeaderStyle = styled.div``

const GlobalHeader = () => (
  <GlobalHeaderStyle>
    <div>Starter <IconMenu /></div>
    <div>
    menu
    </div>
    <div>{/* <OfflineIndicator /> */}</div>
  </GlobalHeaderStyle>
)

export default GlobalHeader
