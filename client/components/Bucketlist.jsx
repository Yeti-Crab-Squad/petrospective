import React, { useState, useEffect } from 'react';
import BucketlistItemDisplay from './BucketlistItemDisplay.jsx'
import CreateListItem from './CreateListItem.jsx'

function Bucketlist(props) {
  const [bucketlistItems, setBucketlistItems] = useState();
  const [newItem, setNewItem] = useState('')

  // useEffect(() => {
  //   fetch('/api/listItems')
  //     .then(res => res.json())
  //     .then(data => {
  //       setBucketlistItems(data)
  //     })
  // })

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

        })
      })
  
  }

  function handleNewItemChange(e) {
    e.preventDefault()
    let newItem = e.target.value;

    return setNewItem(newItem);
  }

  const fakeItem = {
    _id: 'id',
    listItem: 'listItem Title',
    mustAddPost: false,
    isChecked: false
  }

  const fakeItems = [fakeItem, fakeItem, fakeItem]

  return(
    <div>
      <CreateListItem handleNewItemChange={handleNewItemChange}
       newItem={newItem}
       handleNewItemClick={handleNewItemClick}
        />
      {fakeItems.map((item, index) => {
      return <BucketlistItemDisplay key={index} item={item} />
    })
      }
  
    </div>

    // <div>
    //   <CreateListItem handleNewItemChange={handleNewItemChange}
    //    newItem={newItem}
    //    handleNewItemClick={handleNewItemClick}
    //     />
    //   {bucketlistItems.map(item => {
    //   return <BucketlistItemDisplay key={item._id} item={item} />
    // })
    //   }
  
    // </div>
  
  )
}

export default Bucketlist;