/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import RightHeader from './RightHeader';
import RightInfoBar from './RightInfoBar';

// const Wrapper = styled.div`
//   background: inherit;
// `;

class MainPanel extends Component {
  render() {
    let rightInfoBarComponent;
    if (this.props.onDetailsPage === false) {
      rightInfoBarComponent = <RightInfoBar />;
    } else {
      rightInfoBarComponent = '';
    }

    return (
      <Fragment>
        <RightHeader />

        {rightInfoBarComponent}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  onDetailsPage: state.movieFullView.detailsPageIsOpen
});

export default connect(mapStateToProps)(MainPanel);
