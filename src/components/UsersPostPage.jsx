import React, { useEffect, useState } from "react";
import "../App.css";
import AddPostByUser from "./AddPostByUser";


const UsersPostPage = ({
  setBodyOfPost,
  userId,
  bodyOfPost,
  test,
  setTest,
}) => {
  // state use to get data and make map of it to render
  const [posts, setPosts] = useState();
  // state use to get comments from api
  const [comments, setComments] = useState();
  // function to get data from api
  const getUsersPost = async () => {
    // i use _limit to controll of number post tha will get if i don't use it , it will get 100 post
    await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(posts);
      });
  };
  //function to get comment fro api
  const getUsersPostComments = async () => {
    // i use _limit to controll of number commenttha will get if i don't use it , it will get 500 comment
    await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log(comments);
      });
  };

  useEffect(getUsersPost, []);
  useEffect(getUsersPostComments, []);

  return (
    <>
      <div className="UsersPage">
        <AddPostByUser
          userId={userId}
          setBodyOfPost={setBodyOfPost}
          bodyOfPost={bodyOfPost}
          setTest={setTest}
        />

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Post</div>
            {test &&
              test.map((newCom) => {
                return (
                  <>
                    <p>{newCom.com}</p>
                  </>
                );
              })}
            {posts &&
              posts.map((post, index) => {
                return (
                  <>
                    <p className="text-gray-700 text-base" key={index}>
                      {post.body}
                    </p>
                    {comments &&
                      comments.filter((com, i) => {
                        com.postId == post.id ? (
                          <p key={i}>{com.body}</p>
                        ) : (
                          <></>
                        );
                      })}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPostPage;
