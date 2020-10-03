import React from 'react';

function AddPostForm(props) {
  return (
    <div>
    <label htmlFor="completionDate"></label>
    <input value={props.state.dateCompleted}  onChange={props.handleDateChange} id='completionDate' type="text"/>
    <textarea onChange={props.handleBodyOfPostChange} name="" id="postTextArea" cols="30" rows="5"></textarea>
    <label htmlFor="youtubeURL">Youtube Link</label>
    <input onChange={props.handleYoutubeURLChange} type="text"/>
    {/* EMBED GOOGLE MAPS SOMEHOW */}
    {/* <label htmlFor="gooleMapsUrl">Google Maps</label>
    <input onChange={handleEmbedGoogleMaps} type="text"/> */}
    <button onClick={props.handleSubmitPostClick}>Submit Post!</button>
  </div>
  )
}

export default AddPostForm;