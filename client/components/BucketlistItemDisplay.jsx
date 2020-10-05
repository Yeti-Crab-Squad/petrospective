import React from 'react';
import { useState, useEffect } from 'react'
import { json } from 'express';
import AddPostForm from './AddPostForm.jsx'
import CompletedBucketlistItem from './CompletedBucketlistItem.jsx'
import UncompletedBucketlistItem from './UncompletedBucketlistItem.jsx'
import DisplayPost from './DisplayPost.jsx'

function BucketlistItemDisplay(props) {
  const [state, setState] = useState(props.item);
  setState(...state, state.images = [])
  setState(...state, state.handleImagesChange = '')

  function handleCheckedOffClick(listItem) {

    useEffect(() => {
      const updatedItem = {
        isChecked: true,
        mustAddPost: true
      }
      
      fetch(`/api/listItems/${listItem}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: updatedItem
      })
      .then(res => res.json())
      .then(data => {
        setState(...state, state.isChecked = true, state.mustAddPost = true)
      })
      .catch(error => {
        console.log(error)
      })
    })

  



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
        date: state.dateCompleted,
        postDescription: state.postDescription,
        youtubeLink: state.youtubeLink,
        location: state.googleLink,
        images: state.images
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

  function handleGoogleLinkChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(...state, state.googleLink = newValue)
  }

  function handleAddImagesChange(e){
    e.preventDefault()
    const newValue = e.target.value;

    setState(...state, state.handleImagesChange = newValue)
  }

  function handleAddImagesClick() {
    setState(...state, state.images.push(state.handleImagesChange))
    setState(...state, state.handleImagesChange = '');

  }



  if (state.isChecked && state.mustAddPost) {

    return (
      <div>
       <UncompletedBucketlistItem
        listItem={props.listItem}
        isChecked={props.isChecked}
        key={props.key} 
        handleCheckedOffClick={handleCheckedOffClick}
      />
          <AddPostForm 
      state={state}
      handleDateChange={handleDateChange} 
      handleBodyOfPostChange={handleBodyOfPostChange}
      handleGoogleLinkChange={handleGoogleLinkChange}
      handleYoutubeURLChange={handleYoutubeURLChange}
      handleAddImagesChange={handleAddImagesChange}
      handleAddImagesClick={handleAddImagesClick}
      handleSubmitPostClick={handleSubmitPostClick}
    /> 
      </div>
    )
  } else if (state.item.isChecked) {
        return (
          <CompletedBucketlistItem 
            key={props.key}
            listItem={props.listItem}
            dateCompleted={props.dateCompleted}
            description={props.description}
          />
        )
  } else {

    return (
      <UncompletedBucketlistItem
        listItem={props.listItem}
        isChecked={props.isChecked}
        key={props.key} 
        
        handleCheckedOffClick={handleCheckedOffClick}
      />
    )
  }

}

export default BucketlistItemDisplay;


// make only one dexcription

// const newPost = {
//   listItem,
//   dateCompleted, 
//   // some sort of access to an embedded google map
//   // add a date the listItem was created
//   dateCreated,
//   location,
//   postDescription,
//   // maybe rename to originalDescription
//   // REMOVE DESCRIPTION
//   description,
//   youtubeLink,
//   hasCompleted,
//   mustAddPost
//   // Image upload parameter.
// }