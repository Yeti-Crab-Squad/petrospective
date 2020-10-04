import React from 'react';

function CompletedBucketlistItem(props) {
  const [displayPost, setDisplayPost] = useState(false)
  const [postData, setPostData] = useState()

  function showPost(listItem) {
    fetch(`/api/posts/${listItem}`) 
      .then(res => res.json())
      .then(data => {
        setDisplayPost(true)
        setPostData(data)
      })
  }

  if (!displayPost) {
    return (
      <div>
        <div key={props.key} >
        <h2>{props.listItem}</h2>
        <h4>{props.dateCompleted}</h4>
        <button onClick={() => showPost(props.listItem)}>See Post</button>
        <input type="checkbox" checked />
      </div>
      </div>
    )
  } else {
    return (
      <div key={postData._id}>
        <h2>{postData.listItem}</h2>
        <h5>{postData.date}</h5>
        <p>{postData.postDescription}</p>
        {postData.images.map(image => {
          return <img src="image" alt=""/>
        })}
        <iframe src={postData.location} width="420" height="315" frameborder="0"></iframe>
        <iframe width="420" height="315" src={postData.youtubeLink}></iframe>
      </div>
    )
  }




}

export default CompletedBucketlistItem;