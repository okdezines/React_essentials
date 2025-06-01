import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import PostDeetails, { loader as postDetailsLoader } from "./routes/PostDetails.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

import PostDetails from "./routes/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { 
           path: "create-post", element: <NewPost />, action: newPostAction
          },
          // Dynamic route for individual posts
          // This will match any postId after the base path
          // e.g., /123, /456, etc.
          // The `:postId` is a dynamic segment that will match any value
          // and make it available in the component via useParams
          // Note: The order of routes matters; more specific routes should come first
          {path: '/:postId', element: <PostDetails />, loader: postDetailsLoader},
          ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
