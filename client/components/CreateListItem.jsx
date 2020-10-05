import React from "react";

function CreateListItem(props) {
  return (
    <div id='create-list-item'>
      <label htmlFor='createBucketlistItem'>Create New Bucket List Item</label>
      <input
        id='createBucketlistItem'
        onChange={props.handleNewItemChange}
        value={props.newItem}
        type='text'
      />
      <button onClick={props.handleNewItemClick}>
        Add New Item to Bucket List
      </button>
    </div>
  );
}

export default CreateListItem;
