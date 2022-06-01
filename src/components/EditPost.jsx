import "../App.css";


const EditPost = ({setUpdatePost }) => {
  return (
    <div className="EditPost">
      <input type="text" placeholder="update your post" 
      onChange={(e) => setUpdatePost(e.target.value) }
      />
    </div>
  );
}

export default EditPost;
