import "../App.css";
import React, { useEffect, useState } from "react";
import EditUserInfo from "./EditUserInfo";
function AddPostByUser({ userId , setBodyOfPost , bodyOfPost , setTest , updatePost ,  setUpdatePost}) {
  const [postId , setPostId] = useState();
//  const [test , setTest] = useState();
  const addPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        com: bodyOfPost,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) =>{ 
        setBodyOfPost(data.com);
          console.log(data.com);
          console.log(data.userId);
        //   prev => [prev + data]
          setTest([data]);
          setPostId(data.id);
        //   console.log(test);
        }
          );
  };
  const editPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          com: updatePost,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            setTest([data])
        }
        );
    }
  useEffect(addPost, []);
  useEffect(editPost, []);
  return (
    <div className="flex justify-end ">
      <br />
      <input
        type="text"
        placeholder="add post body"
        onChange={(e) => setBodyOfPost(e.target.value)}
      />
      <button
        onClick={() => {
          addPost()
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          <EditUserInfo  updatePost={updatePost} setUpdatePost={setUpdatePost}/>
        }}
      >
        update
      </button>
        
    </div>
  );
}

export default AddPostByUser;
