import React, { useState, useEffect } from 'react';
import BucketlistItemDisplay from './BucketlistItemDisplay.jsx'
import CreateListItem from './CreateListItem.jsx'

function Bucketlist(props) {
  const [bucketlistItems, setBucketlistItems] = useState([]);
  const [newItem, setNewItem] = useState()

  useEffect(() => {
    fetch('/api/bucketlist')
      .then(res => res.json())
      .then(data => {
        setBucketlistItems(data)
      })
  })

  function handleNewItemClick() {

    fetch('/api/listItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    })
    .then(res => res.json())
    .then(data => {
      setNewItem('')

      useEffect(() => {
        fetch('/api/listItems')
        .then(res => res.json())
        .then(data => {
          setBucketlistItems(data)

        })
      })
    })
  }

  function handleNewItemChange(e) {
    e.preventDefault()
    let newItem = e.target.value;

    setNewItem(newItem);
  }

  return(
    <div>
      <CreateListItem handleNewItemChange={handleNewItemChange}
       newItem={newItem}
       handleNewItemClick={handleNewItemClick}
        />
      {bucketlistItems.map(item => {
      return <BucketlistItemDisplay key={item._id} item={item} />
    })
      }
  
    </div>
  
  )
}

export default Bucketlist;