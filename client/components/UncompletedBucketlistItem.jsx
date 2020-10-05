import React from "react";

function UncompletedBucketlistItem(props) {
  return (
    <div key={props.key} className='uncompleted-list-item'>
      <h2>{props.listItem}</h2>
      <input
        onClick={() => props.handleCheckedOffClick(props.listItem)}
        type='checkbox'
      />
    </div>
  );

}

export default UncompletedBucketlistItem;
