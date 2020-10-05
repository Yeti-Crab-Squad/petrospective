import React from "react";

function AddPostForm(props) {
  return (
    <div className='uncompleted-post-form'>
      <p>{props.state.listItem}</p>
      <label htmlFor='completionDate'>Date Completed:</label>
      <input
        value={props.state.dateCompleted}
        onChange={props.handleDateChange}
        id='completionDate'
        type='text'
      />
      <label htmlFor='postTextArea'>Post Body:</label>
      <textarea
        onChange={props.handleBodyOfPostChange}
        name=''
        id='postTextArea'
        cols='30'
        rows='5'></textarea>
      <label htmlFor='youtubeURL'>Youtube Link</label>
      <input onChange={props.handleYoutubeURLChange} type='text' />
      <label htmlFor='googleLink'>Google Map Link</label>
      <input
        id='googleLink'
        onChange={props.handleGoogleLinkChange}
        type='text'
      />
      <label htmlFor='addImages'>Add Images</label>
      <input
        id='addImages'
        value={props.handleImagesChange}
        onChange={props.handleAddImagesChange}
        type='text'
      />
      <button onClick={props.handleAddImagesClick}>Add New Image</button>
      <button onClick={() => props.handleSubmitPostClick(props.state.listItem)}>
        Submit Post!
      </button>
    </div>
  );

}

export default AddPostForm;
