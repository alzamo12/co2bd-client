import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import Event from "../pages/Event/Event";
import JoinedEvent from "../pages/JoinedEvent/JoinedEvent";

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
        path: "upcoming-events",
        element: <UpcomingEvents />
      },
      {
        path: "event/:id",
        element: <PrivateRoute><Event /></PrivateRoute>
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
        element: <PrivateRoute><JoinedEvent /></PrivateRoute>
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