import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPost = ({ userName, userId }) => {
  const navigate = useNavigate();
  //state use to get post of user from api to know the number of it
  const [userPost, setUserPost] = useState([]);
  // to add length of user post state
  let numberOfPost = userPost.length - 1;
  // the same thing of albums
  const [numberOfAlbums, setNnumberOfAlbums] = useState([]);
  let numberOfAlbum = numberOfAlbums.length;
  // functon to get post that own of user
  const getUserPost = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserPost(data);
      });
  };
  // functon to get albums that own of user
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
};

export default UserPost;
