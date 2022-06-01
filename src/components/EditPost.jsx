import "../App.css";
import { useNavigate } from "react-router-dom";
function EditPost({setUpdatePost,updatePost  }) {
  const navigate = useNavigate();
  return (
    <div className="EditPost">
      <input type="text" placeholder="update your post" 
      onChange={(e) => setUpdatePost(e.target.value) }
      />
    </div>
  );
}

export default EditPost;
