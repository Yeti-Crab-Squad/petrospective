import React, {useState} from "react";

function CompletedBucketlistItem(props) {
  const [displayPost, setDisplayPost] = useState(false);
  const [postData, setPostData] = useState({});

  function showPost(listItem) {
    console.log(listItem);
    fetch(`/api/posts/${listItem}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("POST DATQ",data)
        setPostData(data);
        setDisplayPost(true);
      });
  }

  if (!displayPost) {
    return (
      <div>
        <div key={props.key} className='completed-list-item'>
          <h2>{props.listItem}</h2>
          <h4>{props.dateCompleted}</h4>
          <button onClick={() => showPost(props.listItem)}>See Post</button>
          <input className='checkbox' type='checkbox' defaultChecked />
        </div>
      </div>
    );
  } else {
    return (
      <div key={postData._id}>
        <h2>{postData.listItem}</h2>
        <h5>{postData.dateCompleted}</h5>
        <p>{postData.postDescription}</p>
        {console.log("POST DATAaaa", postData)}
        {postData.images.map((image, index) => {
          return <img key={image + index} src={image} alt='' />;
        })}
        <iframe
          src={postData.location}
          width='420'
          height='315'
          frameborder='0'></iframe>
        <iframe width='420' height='315' src={postData.youtubeLink}></iframe>
      </div>
    );
  }
}

export default CompletedBucketlistItem;
