// import "../App.css";
import "../dist/output.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function MainPage({ user, userName, email }) {
  const navigate = useNavigate();
  return (
    <div className="">
      <header className="flex justify-between  border border-indigo-600">
        <div className="">
          <p
            onClick={() => {
              navigate("/user-page");
            }}
          >
            {userName}
          </p>
        </div>
        <div className="font-medium text-purple-600 hover:text-purple-500">
          <ul>
            <li
              onClick={() => {
                navigate("/user-post");
              }}
            >
              Users
            </li>
            <li
              onClick={() => {
                navigate("/users-post-page");
              }}
            >
              Posts
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
