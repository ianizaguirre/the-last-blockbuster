// @flow

import React from 'react';

const Details = props => (
  <div>
    <p> Hi Ian !!!!!!!!!!!!!! </p>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
);

export default Details;
