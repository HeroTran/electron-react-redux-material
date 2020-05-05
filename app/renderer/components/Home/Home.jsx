import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './home.scss';

const Home = (props) => {
  const { t, i18n } = props;
  const handleChange = () => {
    i18n.changeLanguage('vn');
  };
  const handleChangeEN = () => {
    i18n.changeLanguage('en');
  };
  return (
    <div>
      <button type="button">Backss</button>
      <h1>Home1</h1>
      <p onClick={() => handleChange()}>change language VN</p>
      <p onClick={() => handleChangeEN()}>change language EN</p>
      <p>{t('common.experience')}</p>
    </div>
  );
};

export default withRouter(Home);
