import React from 'react';
import { useState, useEffect } from 'react'
import AddPostForm from './AddPostForm.jsx'
import CompletedBucketlistItem from './CompletedBucketlistItem.jsx'
import UncompletedBucketlistItem from './UncompletedBucketlistItem.jsx'

function BucketlistItemDisplay(props) {
  const [state, setState] = useState(props.item);
  const [newPost, setNewPost] = useState('')
  useEffect(() => {
    setState({...state, images: [], handleImagesChange: ''})

  },[])

  console.log(state)
 

  function handleCheckedOffClick(listItem) {
   
      const updatedItem = {
        isChecked: true,
        mustAddPost: true
      }

      console.log(listItem)
      
      fetch(`/api/listItems/${listItem}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: updatedItem
      })
      .then(res => res.json())
      .then(data => {
        setState(state.isChecked = true, state.mustAddPost = true)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function handleDateChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(state.dateCompleted = newValue)
  }

  function handleBodyOfPostChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(state.postDescription = newValue)
  }

  function handleYoutubeURLChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(state.youtubeLink = newValue)
  }

  function handleEmbedGoogleMaps(e) {
    // NOT SURE YET HOW TO DO THIS ONE!!
    e.preventDefault()
    const newValue = e.target.value;

    setState(state.location = newValue)
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newPost
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setState(state.mustAddPost = false)
      })
      .catch(error => {
        console.log(error)
      })
    })
  }

  function handleGoogleLinkChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setState(state.googleLink = newValue)
  }

  function handleAddImagesChange(e){
    e.preventDefault()
    const newValue = e.target.value;

    setState(state.handleImagesChange = newValue)
  }

  function handleAddImagesClick() {
    setState(state.images.push(state.handleImagesChange))
    setState(state.handleImagesChange = '');

  }



  if (state.isChecked && state.mustAddPost) {

    return (
      <div>
       <UncompletedBucketlistItem
        listItem={state.listItem}
        isChecked={state.isChecked}
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
  } else if (state.isChecked) {
        return (
          <CompletedBucketlistItem 

            listItem={state.listItem}
            dateCompleted={state.dateCompleted}
            description={state.description}
          />
        )
  } else {

    return (
      <UncompletedBucketlistItem
        listItem={state.listItem}
        isChecked={state.isChecked}
        
        handleCheckedOffClick={handleCheckedOffClick}
      />
    )
  }

}

export default BucketlistItemDisplay;


