/* eslint-disable prettier/prettier */
import * as React from 'react';
// import Routes from '../Common/Routes/Routes';
import { withRouter, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <div className="page-container">
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <Link to='/login'>Click Login1</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(App);