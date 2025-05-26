import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
 const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={Math.random()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <p style={{ textAlign: "center", color: "white" }}>No posts yet!</p>
      )}

    </>
  );
}

export default PostList;
