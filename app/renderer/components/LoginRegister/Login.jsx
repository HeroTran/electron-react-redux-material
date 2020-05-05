import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './login.scss';

const Login = (props) => {
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Back
      </button>
      <h1>Login page</h1>
    </div>
  );
};
export default withRouter(Login);
