import React from 'react';
import { withRouter } from 'react-router-dom';
import i18n from '../../i18n';
import './profile.scss';

const Profile = (props) => {
  return (
    <div>
      <button type="button">Back</button>
      <h1>Profile Page210</h1>
      <p>{i18n.t('common.male')}</p>
    </div>
  );
};

export default withRouter(Profile);
