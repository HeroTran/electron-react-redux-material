import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './setting.scss';

const Setting = (props) => {
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Back
      </button>
      <h1>Setting</h1>
    </div>
  );
};

export default withRouter(Setting);
