import * as React from 'react';
import { Link } from 'react-router-dom';
import './virtualClassRoom.scss';

const VirtualClassRoom = (props) => {
  console.warn('--------');
  console.warn(props);
  const { id } = props.match.params;
  return (
    <div>
      <Link to="/">Back Home</Link>
      <h1>VirtualClassRoom Page has id: {id}</h1>
    </div>
  );
};

export default VirtualClassRoom;
