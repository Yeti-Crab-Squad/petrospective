import React from 'react';

function AddPostForm(props) {
  return (
    <div>
    <label htmlFor="completionDate">Date Completed:</label>
    <input value={props.date}  onChange={props.handleDateChange} id='completionDate' type="text"/>
    <label htmlFor="postTextArea">Post Body:</label>
    <textarea value={props.postDescription} onChange={props.handleBodyOfPostChange} name="" id="postTextArea" cols="30" rows="5"></textarea>
    <label htmlFor="youtubeURL">Youtube Link</label>
    <input value={props.YTLink} onChange={props.handleYoutubeURLChange} type="text"/>
    <label htmlFor="googleLink">Google Map Link</label>
    <input value={props.GMLink} id='googleLink' onChange={props.handleGoogleLinkChange} type="text"/>
    <label htmlFor="addImages">Add Images</label>
    <input id='addImages' value={props.imagesChange} onChange={props.handleAddImagesChange} type="text"/>
    <button onClick={props.handleAddImagesClick}>Add New Image</button>
    <button onClick={() => props.handleSubmitPostClick(props.state.listItem)}>Submit Post!</button>
  </div>
  )
}


export default AddPostForm;