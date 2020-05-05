import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './virtualClassRoom.scss';

const VirtualClassRoom = (props) => {
  console.warn('--------');
  console.warn(props);
  const { id } = props.match.params;
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Love
      </button>
      <h1>VirtualClassRoom Page has id: {id}</h1>
    </div>
  );
};

export default withRouter(VirtualClassRoom);
