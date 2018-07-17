/* eslint-disable */
import React, { Fragment, Component } from 'react';

import styled from 'styled-components';
// import { FlexContainer } from './../styles';
//  <FlexContainer column>
import Footer from './Footer';
import RightHeader from './RightHeader';
import RightInfoBar from './RightInfoBar';
import Showcase from './Showcase';

const Wrapper = styled.div`
  background: inherit;
`;

const HeaderWrap = styled.div`
  background: #fff;
  min-height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
`;

const InfoWrap = styled.div`
  background: #24252a;
  margin-bottom: 30px;
`;

// const Gutter = styled.div`
//   width: 95%;
//   margin: 0 auto;
// `;

// const ShowCaseWrapper = styled.div`
//   margin: 0 auto;
// `;
const ShowcaseGutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;

  flex-direction: column;
  height: 100%;
`;

class RightColumn extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <FlexContainer>
            <HeaderWrap>
              <RightHeader />
            </HeaderWrap>
            <InfoWrap>
              <RightInfoBar />
            </InfoWrap>
            <ShowcaseGutter>
              <Showcase />
            </ShowcaseGutter>
          </FlexContainer>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default RightColumn;
