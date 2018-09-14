import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
 background: #F9F8F9;
 border-top: 1px solid #ebebeb;
 padding: 1em;
`;

const Content = styled.div`
  text-align: center;
`;

export default () => (
  <Footer>
    <Content>
      Sixgill Developer Documentation | [support@sixgill.com](mailto:support@sixgill.com)
    </Content>
  </Footer>
);
