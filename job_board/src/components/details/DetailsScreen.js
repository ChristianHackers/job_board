import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Details
      </h1>
      <h1>
        {props.match.params.id}
      </h1>
    </div>
  );
}