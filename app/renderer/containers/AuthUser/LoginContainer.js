import { connect } from 'react-redux';
import { loginRequest } from '../../functionals/AuthUser/actions';
import Login from '../../components/AuthUser/Login';
import { makeSelectIsLoading } from '../../functionals/Common/selectors';
import {
  makeSelectUserState,
  makeSelectErrorLoginState,
} from '../../functionals/AuthUser/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: makeSelectUserState(state),
    errorAuth: makeSelectErrorLoginState(state),
    isLoading: makeSelectIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (email, password) => {
      dispatch(loginRequest(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
