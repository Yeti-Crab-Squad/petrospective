import React from 'react';

function UncompletedBucketlistItem(props) {

  if (props.isChecked) {
    return (
      <div key={props.key}>
      <h2>{props.listItem}</h2>
    </div>
    )
  } else {
    return (
      <div key={props.key}>
      <h2>{props.listItem}</h2>
      <input onClick={() => props.handleCheckedOffClick(props.listItem)} type="checkbox"/>
    </div>
    )
  }

}

export default UncompletedBucketlistItem;