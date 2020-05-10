import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Home from '../../components/Home/Home';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const HomeInil = withTranslation('translation')(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HomeInil);
