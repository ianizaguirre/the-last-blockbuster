/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { incrementPageNumber, decrementPageNumber } from './../redux/actionCreators/search';

import { connect } from 'react-redux';

const IconType = styled(Icon)`
  cursor: pointer;
  font-size: 1.8em;
  line-height: 0.75em;

  color: ${props => props.theme.bgLight};
  display: ${props => (props.hidebutton ? 'none' : 'inline-block')};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  border: 10px solid #46a5e5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: auto;
  // grid-gap: 36px;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  // justify-items: center;

  // margin-top: 30px;
  // margin-bottom: 30px;
`;
// ============

const GroupLeft = styled.div`
  // grid-column: 2 / -1;
  justify-self: start;
`;

const TempItem = styled.div`
  font-size: 0.9em;
`;

// ===========

const GroupRight = styled.div`
  justify-self: end;

  border: 10px solid #46a545;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 13px;
`;

const ArrowIconLeft = styled.div`
  // justify-self: end;
`;
const ArrowIconRight = styled.div`
  // justify-self: end;
`;

class Pagination extends Component {
  render() {
    return (
      <Wrapper>
        <GridContainer>
          <GroupLeft>
            <TempItem>Currently on page: {this.props.pageNumber}</TempItem>
          </GroupLeft>

          <GroupRight>
            <ArrowIconLeft>
              <IconType
                icon="arrow-alt-circle-left"
                hidebutton={this.props.pageNumber === 1}
                onClick={this.props.decreasePageNumber}
              />
            </ArrowIconLeft>
            <ArrowIconRight>
              <IconType icon="arrow-alt-circle-right" onClick={this.props.increasePageNumber} />
            </ArrowIconRight>
          </GroupRight>
        </GridContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  pageNumber: state.movies.pageNumber
});

const mapDispatchToProps = dispatch => ({
  increasePageNumber: () => dispatch(incrementPageNumber()),
  decreasePageNumber: () => dispatch(decrementPageNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
