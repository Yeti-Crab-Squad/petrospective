import React from 'react';
import { useState, useEffect } from 'react'
import AddPostForm from './AddPostForm.jsx'
import CompletedBucketlistItem from './CompletedBucketlistItem.jsx'
import UncompletedBucketlistItem from './UncompletedBucketlistItem.jsx'

function BucketlistItemDisplay(props) {
  const [state, setState] = useState(props.item);
  const [newPost, setNewPost] = useState('')

  const [images, setImages] = useState([])
  const [imagesChange, setImagesChange] = useState('')

  const [date, setDateChange] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const [YTLink, setYTLink] = useState('')
  const [GMLink, setGMLink] = useState('')



  // function handleCheckedOffClick(listItem) {
  //     const updatedItem = {
  //       listItem: listItem,
  //       isChecked: true,
  //       hasPost: false
  //     }
      
  //     fetch(`/api/listItems/${listItem}`,{
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(updatedItem)
  //     })
  //     .then(res => res.json())
  //     .then(data => {

  //       // setState(state.isChecked = true, state.hasPost = false)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  function handleDateChange(e) {
    e.preventDefault()
    const newValue = e.target.value;
    setDateChange(newValue)
  }

  function handleBodyOfPostChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setPostDescription(newValue)
  }

  function handleYoutubeURLChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setYTLink(newValue)
  }

  // function handleEmbedGoogleMaps(e) {
  //   // NOT SURE YET HOW TO DO THIS ONE!!
  //   e.preventDefault()
  //   const newValue = e.target.value;

  //   setGMLink(newValue)
  // }

  function handleSubmitPostClick(listItem) {
    const fullLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCyw8Q7SqmZ8RbKT6HgInw5Bcp93emrlNU&q=${GMLink}`

    console.log("LIST ITEM!!!!",listItem)
      const newPost = {
        listItem: listItem,
        dateCompleted: date,
        postDescription: postDescription,
        youtubeLink: YTLink,
        location: fullLink,
        images: images
      }

      fetch('/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(res => res.json())
      .then(data => {

        console.log(data)
        // setState(...state, state.hasPost:true)

        const updatedItem = {
          listItem: listItem,
          isChecked: true,
          hasPost: true
        }

        fetch(`/api/listItems/${listItem}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {

          fetch('/api/listItems')
      .then(res => res.json())
      .then(data => {
        setState(data)  
        console.log("POST",bucketlistItems)

      })
          console.log('Have updated list item, HAS POST is TRUE')
        })
      
      })
      .catch(error => {
        console.log(error)
      })
   
  }

  function handleGoogleLinkChange(e) {
    e.preventDefault()
    const newValue = e.target.value;

    setGMLink(newValue)

  }

  function handleAddImagesChange(e){
    e.preventDefault()
    const newValue = e.target.value;
    setImagesChange(newValue)
  }

  function handleAddImagesClick() {
    setImages([...images, imagesChange])
    // setImagesChange('')
    
  }

  // function handleDeleteClick(listItem) {

  // }


  // console.log(state)
  if (state.isChecked && !state.hasPost) {
    // console.log('THIS IS STATE',state)

    return (
      <div>
       <UncompletedBucketlistItem
        listItem={state.listItem}
        isChecked={state.isChecked}
        handleCheckedOffClick={props.handleCheckedOffClick}
      />
          <AddPostForm 


      state={state}
      date={date}
      postDescription={postDescription}
      YTLink={YTLink}
      GMLink={GMLink}
      imagesChange={imagesChange}
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
        
        handleCheckedOffClick={props.handleCheckedOffClick}
      />
    )
  }

}

export default BucketlistItemDisplay;


