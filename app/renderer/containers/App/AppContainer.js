import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import App from '../../components/App/App';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const AppWithI18n = withTranslation('translation')(App);

export default connect(mapStateToProps, mapDispatchToProps)(AppWithI18n);
