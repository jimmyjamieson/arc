import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
  width: 60px;
  text-align: center;
  padding: .3rem;
  border-radius: .7rem;
`;

const Online = styled(Indicator)`
  background: MEDIUMAQUAMARINE;
`;
const Offline = styled(Indicator)`
  background: indianred;
`;

const isClient = typeof window !== 'undefined';
let defaultOnlineState;
if (isClient) {
  window.addEventListener('offline', () => { defaultOnlineState = true; });
}


class OfflineIndicator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { online: defaultOnlineState };
  }
  state: Object;

  componentDidMount() {
    if (isClient) {
      window.addEventListener('online', this.goOnline);
      window.addEventListener('offline', this.goOffline);
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('online', this.goOnline);
      window.removeEventListener('offline', this.goOffline);
    }
  }

  goOnline = () => {
    this.setState({ online: true });
  };
  goOffline = () => {
    this.setState({ online: false });
  };

  render() {
    if (this.state.online) {
      return <Online>Online</Online>;
    }
    return <Offline>Offline</Offline>;
  }
}

export default OfflineIndicator;
