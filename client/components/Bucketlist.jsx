import React, { useState, useEffect } from 'react';
import BucketlistItemDisplay from './BucketlistItemDisplay.jsx'
import CreateListItem from './CreateListItem.jsx'

function Bucketlist(props) {
  const [newItem, setNewItem] = useState('')
  const [bucketlistItems, setBucketlistItems] = useState([]);

  useEffect(() => {
    fetch('/api/listItems')
      .then(res => res.json())
      .then(data => {
        setBucketlistItems(data)
        console.log(bucketlistItems.concat(...data))
      })
  },[])


  function handleCheckedOffClick(listItem) {
    const updatedItem = {
      listItem: listItem,
      isChecked: true,
      hasPost: false
    }
    
    fetch(`/api/listItems/${listItem}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
    .then(res => res.json())
    .then(listItemData => {
      console.log("",listItemData)
      console.log("PRE",bucketlistItems)
      fetch('/api/listItems')
      .then(res => res.json())
      .then(data => {
        setBucketlistItems(data)  
        console.log("POST",bucketlistItems)

      })
      

      // setState(state.isChecked = true, state.hasPost = false)
    })
    .catch(error => {
      console.log(error)
    })
}

  function handleNewItemClick() {

    const newListItem = {
      listItem: newItem,
    
    }
  
    fetch(`/api/listItems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListItem)
    })
    .then(res => res.json())
    .then(data => {
      setNewItem('')
      fetch('/api/listItems')
      .then(res => res.json())
      .then(data => {
        setBucketlistItems(data)
        console.log(bucketlistItems.concat(...data))

      })
      })
  
  }

  function handleNewItemChange(e) {
    e.preventDefault()
    let newItem = e.target.value;

    return setNewItem(newItem);
  }

  return(
    <div>
      <CreateListItem handleNewItemChange={handleNewItemChange}
       newItem={newItem}
       handleNewItemClick={handleNewItemClick}
        />
      {bucketlistItems.map(item => {
      return <BucketlistItemDisplay handleCheckedOffClick={handleCheckedOffClick} key={item._id} item={item} />
    })
      }

    </div>
  
  )
}

export default Bucketlist;