import {
  createBrowserRouter,
} from "react-router-dom";
import Root from '../Root/Root'
import Home from '../Pages/Home';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/news.json')
      },
      {
        path: "/news/:id",
        element: <PrivetRoute><News /></PrivetRoute>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);



export default router;