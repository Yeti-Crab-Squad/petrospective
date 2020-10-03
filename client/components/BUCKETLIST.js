import React, { useState, useEffect } from 'react';
import BucketlistItemDisplay from './BucketlistItemDisplay.jsx'

function Bucketlist(props) {
  const [bucketlistItems, setState] = useState([]);

  useEffect(() => {
    fetch('/api/bucketlist')
      .then(res => res.json())
      .then(data => {
        setState(data)
      })
  })

  return(
    <div>
      {bucketlistItems.map(item => {
      return <BucketlistItemDisplay key={item._id} bucketlistItem={item} />
    })
      }
  
    </div>
  
  )
}

export default Bucketlist;