import React from 'react';
import { useState, useEffect } from 'react'
import { json } from 'express';
import AddPostForm from './AddPostForm.jsx'
import CompletedBucketlistItem from './CompletedBucketlistItem.jsx'
import UncompletedBucketlistItem from './UncompletedBucketlistItem.jsx'

function BucketlistItemDisplay(props) {
  const [state, setState] = useState(props);

  function handleCheckedOffClick(key) {
    setState(...state, state.hasCompleted = true, state.mustAddPost = true)
  }

  function handleDateChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(...state, state.dateCompleted = newValue)
  }

  function handleBodyOfPostChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(...state, state.postDescription = newValue)
  }

  function handleYoutubeURLChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(...state, state.youtubeLink = newValue)
  }

  function handleEmbedGoogleMaps(e) {
    // NOT SURE YET HOW TO DO THIS ONE!!
    e.preventDefault()
    const newValue = e.target.value;

    setState(...state, state.location = newValue)
  }

  function handleSubmitPostClick() {

    useEffect(() => {
      const newPost = {
        listItem: state.listItem,
        dateCompleted: state.dateCompleted,
        location: state.location,
        postDescription: state.postDescription,
        youtubeLink: state.youtubeLink,
        hasCompleted: true,
        mustAddPost: false
        // Image upload parameter goes here.
      }

      fetch('/api/post/compelete-bucket-list-item', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newPost
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setState(...state, state.mustAddPost = false)
      })
      .catch(error => {
        console.log(error)
      })
    })
  }



  if (state.hasCompleted && state.mustAddPost) {

    return (
       <AddPostForm 
        state={state}
        handleDateChange={handleDateChange} 
        handleBodyOfPostChange={handleBodyOfPostChange}
        handleYoutubeURLChange={handleYoutubeURLChange}
    /> 
    )
  } else if (state.hasCompleted) {
    
    return (
      <CompletedBucketlistItem 
        key={props.key}
        hasCompleted={props.hasCompleted}
        listItem={props.listItem}
        dateCompleted={props.dateCompleted}
        description={props.description}
      />
    )
  } else {

    return (
      <UncompletedBucketlistItem
        key={props.key}
        hasCompleted={props.hasCompleted}
        listItem={props.listItem}
        dateCreated={props.dateCreated}
        description={props.description}
        handleCheckedOffClick={handleCheckedOffClick}
      />
    )
  }

}

export default BucketlistItemDisplay;

const newPost = {
  listItem,
  dateCompleted, 
  // some sort of access to an embedded google map
  // add a date the listItem was created
  dateCreated,
  location,
  postDescription,
  // maybe rename to originalDescription
  description,
  youtubeLink,
  hasCompleted,
  mustAddPost
  // Image upload parameter.
}