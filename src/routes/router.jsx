import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../pages/CreateEvent/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "create-event",
        element: <PrivateRoute><CreateEvent /></PrivateRoute>
      },
      {
        path: "manage-events",
        element: <span>Thsi is manage Event Page</span>
      },
      {
        path: "joined-events",
        element: <span>Thsi is Joined Events Page</span>
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router