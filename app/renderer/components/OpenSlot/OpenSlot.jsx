import React from 'react';
import i18n from '../../i18n';
import './openSlot.scss';

const OpenSlot = (props) => {
  console.log('=======', props);
  return (
    <div>
      <button type="button">Back</button>
      <h1>OpenSlot Page</h1>
      <p>{i18n.t('common.male')}</p>
    </div>
  );
};

export default OpenSlot;
