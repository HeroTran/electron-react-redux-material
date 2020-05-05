import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './profile.scss';

const Profile = (props) => {
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Back
      </button>
      <h1>Profile Page</h1>
    </div>
  );
};

export default withRouter(Profile);
