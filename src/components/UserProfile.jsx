import "../App.css";
import { useNavigate } from "react-router-dom";
function UserProfile({ setUserName, setEmail, userName, email }) {
  const navigate = useNavigate();
  return (
    <div className="UserProfile">
      <p>{userName}</p>
      <p>{email}</p>
      <p
        onClick={() => {
          navigate("/edit-user-info");
        }}
      >
        Update
      </p>
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

export default UserProfile;
