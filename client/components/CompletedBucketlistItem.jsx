import React from 'react';

function CompletedBucketlistItem(props) {
  return (
    <div>
      <div key={props.key} hasCompleted={props.hasCompleted}>
      <h2>{props.listItem}</h2>
      <h4>{props.dateCompleted}</h4>
      <p>{props.description}</p>
      <input type="checkbox" checked />
    </div>
    </div>
  )
}

export default CompletedBucketlistItem;