// src/routes/index.tsx
import { createBrowserRouter } from "react-router"

// Layout
import Main from "@/layouts/Main"

// Pages
import PostIndex from "@/pages/posts/PostIndex"
import PostDetail from "@/pages/posts/PostDetail"
import PostEdit from "@/pages/posts/PostEdit"
import PostCreate from "@/pages/posts/PostCreate"
import index from "@/pages/categories"
import Auth from "@/layouts/Auth"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import Home from "@/pages/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "posts",
        Component: PostIndex,
      },
      { path: "posts/:postId", Component: PostDetail },
      { path: "posts/create", Component: PostCreate },
      { path: "posts/:postId/edit", Component: PostEdit },
      {
        path: "categories",
        Component: index,
      },
      {
        path: "auth",
        Component: Auth,
        children: [
          {path: "login", Component: Login},
          {path: "register", Component: Register},
        ]
      }
      // {
      //   path: "comments",
      //   element: <div>Comment List</div>,
      //   children: [
      //     { path: ":commentId", element: <div>Comment Detail</div> },
      //   ],
      // },
    ],
  },
])
