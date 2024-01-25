import { useEffect, useState } from "react";
import { getAllPosts } from "./api";
import PostLists from "./components/PostLists";
import PostForm from "./components/PostForm";

const AppNew = () => {
  const [posts, setPosts] = useState([]);

  //get all posts
  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, [posts]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-2 border border-black">
      <div className="lg:w-[90%] w-auto border border-black flex flex-col gap-4 rounded-lg p-4 min-h-[49rem]">
        <h1 className="text-3xl font-bold text-center uppercase">todo app</h1>
        <div className="flex h-full gap-10 p-10 border border-black rounded-lg">
          <div className="flex flex-col items-center flex-[1] border border-gray-300 rounded-md gap-4 p-6">
            <h1 className="uppercase ">create post</h1>
            <PostForm posts={posts} setPosts={setPosts} />
          </div>
          <div className="flex-[4] border border-gray-300 rounded-md p-6">
            <div className="flex flex-wrap gap-4">
              <PostLists posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNew;
