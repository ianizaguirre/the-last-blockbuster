/* eslint-disable */
import React, { Fragment, Component } from 'react';

import styled from 'styled-components';
import { FlexContainer } from './../styles';

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
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const ShowCaseWrapper = styled.div`
  margin: 0 auto;
`;
class RightColumn extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <FlexContainer column>
            <HeaderWrap>
              <Gutter>
                <RightHeader />
              </Gutter>
            </HeaderWrap>
            <InfoWrap>
              <RightInfoBar />
            </InfoWrap>

            <ShowCaseWrapper>
              <Showcase />
            </ShowCaseWrapper>
          </FlexContainer>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default RightColumn;
