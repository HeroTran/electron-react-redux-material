import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  API_URL,
  AUTHORIZE_CODE,
} from '../../../functionals/LoginRegister/constants';

export default (AuthComponent) => {
  class Authenticated extends React.Component {
    componentDidMount() {
      let authorizeCode = localStorage.getLocalStore(AUTHORIZE_CODE);
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('codeLogin');
      authorizeCode = code || authorizeCode;
      if (authorizeCode) {
        const errorCode = urlParams.get('error_code');
        if (errorCode) {
          this.props.redirectToLogin();
        }
        this.props.checkLoginStatus(authorizeCode);
      } else {
        this.props.redirectToLogin();
      }
    }

    render() {
      if (!this.props.isLoggedIn) {
        return null;
      }
      return <AuthComponent {...this.props} />;
    }
  }
  const mapStateToProps = () => ({
    isLoggedIn: true,
  });
  const mapDispatchToProps = (dispatch) => ({
    redirectToLogin: () => dispatch(push(API_URL.URL_LOGIN)),
    redirectToHome: () => dispatch(push('/')),
  });
  return connect(mapStateToProps, mapDispatchToProps)(Authenticated);
};
