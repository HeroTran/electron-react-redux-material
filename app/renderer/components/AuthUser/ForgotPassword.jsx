import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './login.scss';

const ForgotPassword = (props) => {
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Back
      </button>
      <h1>ForgotPassword</h1>
    </div>
  );
};
export default withRouter(ForgotPassword);
