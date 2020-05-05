import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './login.scss';

const ForgetPassword = (props) => {
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Back
      </button>
      <h1>ForgetPassword</h1>
    </div>
  );
};
export default withRouter(ForgetPassword);
