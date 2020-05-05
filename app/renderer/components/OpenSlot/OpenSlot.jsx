import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './openSlot.scss';

const OpenSlot = (props) => {
  console.log('lalalal', props);
  return (
    <div>
      <button type="button">Back</button>
      <h1>OpenSlot Page</h1>
    </div>
  );
};

export default withRouter(OpenSlot);
