import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function UserPost({ userName, userId }) {
  const navigate = useNavigate();
  const [userPost, setUserPost] = useState([]);
  let numberOfPost = userPost.length;
  const [numberOfAlbums, setNnumberOfAlbums] = useState([]);
  let numberOfAlbum = numberOfAlbums.length;
  const getUserPost = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserPost(data);
      });
  };
  const getUseralbums = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((data) => {
        setNnumberOfAlbums(data);
        console.log(numberOfAlbums);
      });
  };
  useEffect(getUserPost, []);
  useEffect(getUseralbums, []);
  return (
    <div className="UsersPost">
      <p>{userName}</p>
      <p>The number of post is {numberOfPost} </p>
      <p>The number of albums is {numberOfAlbum}</p>
      <p
        onClick={() => {
          navigate("/MainPage");
        }}
      >
        main
      </p>
    </div>
  );
}

export default UserPost;
