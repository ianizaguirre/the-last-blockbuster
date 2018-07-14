/* eslint-disable */
import React, { Fragment, Component } from 'react';

import styled from 'styled-components';
import { Gutter, FlexContainer } from './../styles';

import RightHeader from './RightHeader';
import RightInfoBar from './RightInfoBar';
import Showcase from './Showcase';

const Wrapper = styled.div`
  background: inherit;
`;

const Pink = styled.div`
  background: pink;
  min-height: ${props => props.theme.headerHeight};
`;

const InfoWrap = styled.div`
  background: #24252a;
`;

// const Blue = styled.div`
//   background: blue;
// `;

class RightColumn extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <FlexContainer column>
            <Pink>
              <Gutter>
                <RightHeader />
              </Gutter>
            </Pink>
            <InfoWrap>
              <RightInfoBar />
            </InfoWrap>

            <Gutter>
              <Showcase />
            </Gutter>
          </FlexContainer>
        </Wrapper>
      </Fragment>
    );
  }
}

export default RightColumn;
