import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './login.scss';

const Login = (props) => {
  return (
    <div>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};
export default withRouter(Login);
