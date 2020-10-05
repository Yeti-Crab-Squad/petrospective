import React, {useState, useEffect} from "react";
import BucketlistItemDisplay from "./BucketlistItemDisplay.jsx";
import CreateListItem from "./CreateListItem.jsx";
import Header from "./Header.jsx";

function Bucketlist(props) {
  const [newItem, setNewItem] = useState("");
  const [bucketlistItems, setBucketlistItems] = useState([]);

  useEffect(() => {
    fetch("/api/listItems")
      .then((res) => res.json())
      .then((data) => {
        setBucketlistItems(data);
        console.log(bucketlistItems.concat(...data));
      });
  }, []);

  function handleNewItemClick() {
    const newListItem = {
      listItem: newItem,
    };

    fetch(`/api/listItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewItem("");
        fetch("/api/listItems")
          .then((res) => res.json())
          .then((data) => {
            setBucketlistItems(data);
            console.log(bucketlistItems.concat(...data));
          });
      });
  }

  function handleNewItemChange(e) {
    e.preventDefault();
    let newItem = e.target.value;

    return setNewItem(newItem);
  }

  return (
    <>
      <Header />
      <div id='bucket-list-container'>
        <CreateListItem
          handleNewItemChange={handleNewItemChange}
          newItem={newItem}
          handleNewItemClick={handleNewItemClick}
        />
        {bucketlistItems.map((item) => {
          return <BucketlistItemDisplay key={item._id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Bucketlist;
