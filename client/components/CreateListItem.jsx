import React from 'react';

function CreateListItem(props) {

  return (
    <div>
      <label htmlFor="createBucketlistItem">Create New Bucket List Item</label>
      <input id='createBucketlistItem' onChange={props.handleNewItemChange} value={props.newItem} type="text"/>
      <submit onClick={props.handleNewItemClick}></submit>
    </div>
  )
}

export default CreateListItem;