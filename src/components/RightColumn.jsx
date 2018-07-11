/* eslint-disable */
import React, { Fragment, Component } from 'react';

import RightHeader from './RightHeader';
import RightInfoBar from './RightInfoBar';
import Showcase from './Showcase';

import styled from 'styled-components';

const Wrapper = styled.div`
  background: inherit;
  width: 100%;
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Pink = styled.div`
  background: pink;
  height: ${props => props.theme.headerHeight};
`;

const Grey = styled.div`
  background: #24252a;
`;

const Blue = styled.div`
  background: blue;
`;

class RightColumn extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <FlexContainer>
            <Pink>
              <Gutter>
                <RightHeader />
              </Gutter>
            </Pink>
            <Grey>
              <Gutter>
                <RightInfoBar />
              </Gutter>
            </Grey>
            <Blue>
              <Gutter>
                <Showcase />
              </Gutter>
            </Blue>
          </FlexContainer>
        </Wrapper>
      </Fragment>
    );
  }
}

export default RightColumn;
