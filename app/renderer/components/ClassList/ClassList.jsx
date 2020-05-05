import * as React from 'react';
import './classList.scss';

const ClassList = (props) => {
  return (
    <div>
      <button type="button" onClick={props.history.goBack}>
        Back
      </button>
      <h1>Class List Page</h1>
    </div>
  );
};

export default ClassList;
