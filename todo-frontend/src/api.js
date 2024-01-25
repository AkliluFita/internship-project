// create a new post
export const createPost = async (postData) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

//   get all posts
export const getAllPosts = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/post/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(postData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error listing posts:", error);
  }
};

// Delete a post
export const deletePost = async (postId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/post/${postId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

// Updated a post
export const updatePost = async (postData, postId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/post/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
