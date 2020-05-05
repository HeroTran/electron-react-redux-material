import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../Common/Routes/Routes';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <div className="page-container">
            <div className="main-content">
              <div className="section__content section__content--p30">
                <button type="button" onClick={this.props.history.goBack}>
                  Back
                </button>
                <div className="container-fluid">
                  <Link to="/login">Login</Link>
                  <Link to="/forgot-password">forgot-password</Link>
                  <p>All page inside app</p>
                  <Link to="/">Home</Link>
                  <Link to="/open-slot">open-Slot</Link>
                  <Link to="/profile">profile</Link>
                  <Link to="/setting">setting</Link>
                  <Link to="/classroom/a564c148-e480-4f92-aa7a-6cd9b7b19ae6">
                    VC classroom
                  </Link>
                  <Link to="/dasdsa">404</Link>
                  <>
                    <Routes />
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
