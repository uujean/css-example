import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const Container = styled.div`
  display: flex
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: #b9eaff;
  margin: 0 1em;
  ${(props) => 
    props.primary &&
    css`
      background: #009cd5;
      color: #fff;
    `};
`;

export default function StyledComponent() {
    return (
        <Container>
            <Button>Normal Button</Button>
            <Button primary>Props Button</Button>
        </Container>
    );
}

