import "../App.css";
import { useNavigate } from "react-router-dom";
function EditUserInfo({ setUserName, setEmail }) {
  const navigate = useNavigate();
  return (
    <div className="EditUserInfo">
      <form className="formEditInfo">
        <br />

        <input
          type="text"
          placeholder="write your new user name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="write your new user email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button
          className="btnLogin"
          onClick={() => {
            navigate("/user-page");
          }}
        >
          update
        </button>
      </form>
    </div>
  );
}

export default EditUserInfo;
