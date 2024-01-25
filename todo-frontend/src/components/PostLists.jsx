import { deletePost } from "../api";

const PostLists = ({ posts }) => {
  //   handle delete post
  const handleDelete = async (postId) => {
    console.log(posts);
    await deletePost(postId);
  };

  return (
    <>
      {posts.map((post, index) => (
        <div
          className="border border-gray-300 w-[20rem] p-4 rounded-md"
          key={index}
        >
          <div className="flex justify-between">
            <h1>name</h1>
            <h1>{post.username}</h1>
          </div>
          <div className="flex justify-between">
            <h1>Position</h1>
            <h1>{post.position}</h1>
          </div>
          <div className="flex justify-between">
            <h1>age</h1>
            <h1>{post.age}</h1>
          </div>
          <div className="flex justify-between">
            <h1>email</h1>
            <h1>{post.email}</h1>
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="p-2 border border-gray-300 rounded-md"
              onClick={() => {
                handleDelete(post._id);
              }}
            >
              delete
            </button>
            <button className="p-2 border border-gray-300 rounded-md">
              update
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostLists;
