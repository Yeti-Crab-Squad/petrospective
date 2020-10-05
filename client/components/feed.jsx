import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Feed = (props) => {
  
  function renderTable() {
    fetch('http://localhost:3000/api/posts')
      .then(res = res.json())
      .then(completeItems => {
        return completeItems.map((info, index) => {
          {listItem, date, postDescription, location, youtubeLink, images} = info;
          return (
            <div>
              
            </div>
            // <table>
            //   <td>
            //   <th>This is where a header would go</th>
            //   </td>
            //   <tr>{listItem}</tr>
            //   <tr>{date}</tr>
            //   <tr>{postDescription}</tr>
            //   <tr>{location}</tr>
            //   <tr>{`<video src=${youtubeLink}`}</tr>
            // </table>
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