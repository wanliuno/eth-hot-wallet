/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={12} xs={24}>
          {'WLI Hot Wallet - '}
          <a href={github} target="_blank" rel="noopener">
            Wanliuno Wallet with ERC20 support (GitHub)
          </a><br />
          Created using: eth-lightwallet, React.js, Ant design...
        </Col>

        <Span>
          <Col sm={12} xs={24}>
             WLI: 0xbc0938b3059d7EF7a6510D400cBe4498172088A5
            <br />
            ETH: 0x97325941fafde5a182e6f7e5475a592ac615a3f2
          </Col>
        </Span>

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
