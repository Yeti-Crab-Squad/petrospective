import React from 'react';

function UncompletedBucketlistItem(props) {
  return (
    <div key={props.key} hasCompleted={props.hasCompleted}>
    <h2>{props.listItem}</h2>
    <h4>{props.dateCreated}</h4>
    <p>{props.description}</p>
    <input onClick={() => handleCheckedOffClick(props.key)} type="checkbox"/>
  </div>
  )
}

export default UncompletedBucketlistItem;