import "./App.css";
import "./dist/output.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./components/Login.jsx";
import MainPage from "./components/MainPage.jsx";
import UserProfile from "./components/UserProfile";
import EditUserInfo from "./components/EditUserInfo";
import UserPost from "./components/UserPost";
import UsersPostPage from "./components/UsersPostPage";
import axios from "axios";
function App() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState();
  const [bodyOfPost, setBodyOfPost] = useState();
  const [updatePost, setUpdatePost] = useState("");
  const [test, setTest] = useState();
  // i don't know why the data late !!
  // to get data i must make some error in this fle!!
  useEffect(async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(user);
      });
  }, []);
  return (
    <div className="">
      <div className="max-w-md  space-y-8 ">
     {/* make route */}
      <Routes>
        {/* the defult rout (/) thar log in page */}
        <Route
          path="/"
          element={
            <Login
              user={user}
              setUserName={setUserName}
              setEmail={setEmail}
              userName={userName}
              email={email}
              setUserId={setUserId}
            />
          }
        />
        {/* /MainPage contain user name and the users(that contain the number of post an albums of the user) */}
        <Route
          path="/MainPage"
          element={<MainPage user={user} userName={userName} email={email} />}
        />
        <Route
          path="/user-page"
          element={
            <UserProfile
              setUserName={setUserName}
              setEmail={setEmail}
              userName={userName}
              email={email}
            />
          }
        />
        <Route
          path="/edit-user-info"
          element={
            <EditUserInfo setUserName={setUserName} setEmail={setEmail} />
          }
        />
        <Route
          path="/user-post"
          element={<UserPost userName={userName} userId={userId} />}
        />
        <Route
          path="/users-post-page"
          element={
            <UsersPostPage
              userId={userId}
              setBodyOfPost={setBodyOfPost}
              bodyOfPost={bodyOfPost}
              test={test}
              setTest={setTest}
              setUpdatePost={setUpdatePost}
              updatePost={updatePost}
            />
          }
        />
      </Routes>

      </div>
    </div>
  );
}

export default App;
