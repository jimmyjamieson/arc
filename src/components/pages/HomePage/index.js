// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import styled from 'styled-components';
import PieChart from '../../molecules/charts/pie';

const HomeWrapper = styled.div`
  position: relative;
  background: linear-gradient(lightseagreen, deepskyblue);
  height: 100vh;
`

const TestVh = styled.div`
  background: coral;
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 50px;
  border-bottom: solid 1px white;
`

const HomePage = () => {
  return (
    <HomeWrapper>Hello World...<PieChart /><TestVh /></HomeWrapper>
  )
}

export default HomePage
