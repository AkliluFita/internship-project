import { useState } from "react";
import { createPost } from "../api";

const PostForm = ({ posts, setPosts }) => {
  const inputStyle =
    "shadow appearance-none  border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const initialData = {
    username: "",
    position: "",
    age: 0,
    email: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   handle list all posts
  const handleCreatePost = async (event) => {
    event.preventDefault();
    const newPost = await createPost(formData);
    console.log(newPost);
    setPosts([newPost, ...posts]);
    setFormData({
      username: "",
      position: "",
      age: 0,
      email: "",
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <form
          action=""
          className="flex flex-col gap-8"
          onSubmit={handleCreatePost}
        >
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className={inputStyle}
            required
          />
          <input
            type="number"
            placeholder="age"
            className={inputStyle}
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <input
            type="submit"
            value="submit"
            className="p-4 bg-gray-200 border border-gray-400 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default PostForm;
