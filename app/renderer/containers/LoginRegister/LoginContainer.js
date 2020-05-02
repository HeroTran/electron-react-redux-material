import { connect } from 'react-redux';
import Login from '../../components/LoginRegister/Login';
import { makeSelectUserNameState } from '../../functionals/LoginRegister/selectors';

const mapStateToProps = (state) => ({
  userName: makeSelectUserNameState(state),
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
