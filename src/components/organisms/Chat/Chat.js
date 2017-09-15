/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ChatBox = styled.div`
  background: white;
  border: solid 1px #ccc;
  border-radius: .325rem;
  width: 200px;
  height: 300px;
  position: absolute;
  right: 10px; bottom: 10px;
`;

class Chat extends PureComponent {
  render() {
    return (
      <ChatBox>Chat</ChatBox>
    );
  }
}

export default Chat;
