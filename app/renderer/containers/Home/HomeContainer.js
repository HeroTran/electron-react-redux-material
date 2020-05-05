import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Home from '../../components/Home/Home';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const HomeWithI18n = withTranslation('translation')(Home);

export default connect(mapStateToProps, mapDispatchToProps)(HomeWithI18n);
