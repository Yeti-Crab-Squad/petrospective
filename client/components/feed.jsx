import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header.jsx";

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((completeItems) => {
        setPosts(posts.concat(...completeItems));
      });
  }, []);

  return (
    <div>
      <Header />
      {/* <div className="feed-container"> */}
      {posts.map((post) => {
        {
          console.log(post);
        }
        return <RenderPost post={post} />;
      })}
    </div>
  );
};

//API_KEY = AIzaSyCyw8Q7SqmZ8RbKT6HgInw5Bcp93emrlNU
function RenderPost(props) {
  return (
    <>
      <div className='feed-container'>
        <div className='title-date'>
          <h3>{props.post.listItem}</h3>
          <h6>{props.post.dateCompleted}</h6>
        </div>

        <iframe
          id='map-img'
          width='320'
          height='240'
          src={props.post.location}></iframe>
        <div className='image-container'>
          <p>{props.post.postDescription}</p>
          <iframe
            width='200'
            height='200'
            src={props.post.youtubeLink}></iframe>
          {props.post.images.map((image) => {
            return (
              <img
                width='200'
                height='200'
                src={image}
                alt='image not loaded'></img>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
