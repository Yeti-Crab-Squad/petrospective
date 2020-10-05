import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Feed = (props) => {
  const completeItems = {
  listItem: 'I want to hike in Central Park with Rocko',
  date: 'Jan 7th 2058',
  postDescription: "Central Park sure has changed",
  youtubeLink: 'fakeYoutubeLink',
  location: 'fakeYoutubeLink',
  images: ['image1', 'image2']
}

  function renderTable() {
    fetch('http://localhost:3000/api/posts')
      .then(res = res.json())
      .then(completeItems => {
        return completeItems.map((feedItems, index) => {
          {listItem, date, postDescription, location, youtubeLink, images} = feedItems;
          return (
            <div>
              <h3>{listItem}</h3>
              <h6>{date}</h6>
              
              <div>
                <p>{postDescription}</p>
                <iframe width="320" height="240" src={youtubeLink} ></iframe>
                {images.map(image => {
                  return <img src={image} alt="image not loaded"></img>
                })}
              </div>
            </div>
          )
        })
      })
  }

  render() {
    return (
      <div>
        <div className="feed-container">
          <div className="feed-items">{this.renderTable()}</div>
        </div>
      </div>
    )
  }
}



export default Feed;