import React from 'react';

function UncompletedBucketlistItem(props) {
  return (
    <div key={props.key}>
    <h2>{props.listItem}</h2>
    <input onClick={() => handleCheckedOffClick(props.listItem)} type="checkbox"/>
  </div>
  )
}

export default UncompletedBucketlistItem;