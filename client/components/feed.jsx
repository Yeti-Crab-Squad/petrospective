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
      {/* <div className="feed-container"> */}
      <h1>MY PET TIME CAPSULE</h1>
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
      <Header />
      <div className='feed-container'>
        <h3>{props.post.listItem}</h3>
        <h6>{props.post.dateCompleted}</h6>
        <iframe width='320' height='240' src={props.post.location}></iframe>
        <div>
          <p>{props.post.postDescription}</p>
          <iframe
            width='320'
            height='240'
            src={props.post.youtubeLink}></iframe>
          {props.post.images.map((image) => {
            return (
              <img
                width='320'
                height='240'
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
