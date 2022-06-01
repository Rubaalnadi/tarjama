// import "../App.css";
import "../dist/output.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUserName, setEmail, userName, email, setUserId }) => {
  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState(false);
  // this state i think to use if the user enter user name or email not true
  // const [message, setMessage] = useState("");

  // function to check if userName and email in the data
  const checkLogin = (e) => {
    e.preventDefault();
    user.map((usersInfo) => {
      if (usersInfo.username == userName && usersInfo.email == email) {
        setUserId(usersInfo.id);
        console.log(usersInfo.id);
        setCheckUser(true);
        navigate("/MainPage");
      } else {
        console.log(checkUser);
      }
    });
  };

  return (
    <>
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="flex flex-col justify-center">
          <br />

          <input
            type="text"
            placeholder="write your user name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="write your user email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button
            className="  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={checkLogin}
          >
            Sign in
          </button>
        </form>
      </div>
      {/* {checkUser
              ? message &&<></>
              : message && <div className="ErrorMessageLogin">{message}</div>} */}
    </>
  );
}

export default Login;
