import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import Event from "../pages/Event/Event";
import JoinedEvents from "../pages/JoinedEvent/JoinedEvents";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import UpdateEvent from "../pages/UpdateEvent/UpdateEvent";
import Stats from "../pages/AdminDashboard/Stats/Stats";
import AdminDashboard from "../layouts/AdminDashboard";
import Users from "../pages/AdminDashboard/Users/Users";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/Aboutus/AboutUs";
import FAQSection from "../pages/FAQ/FAQ";
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
        element: <PrivateRoute><ManageEvents /></PrivateRoute>
      },
      {
        path: "joined-events",
        element: <PrivateRoute><JoinedEvents /></PrivateRoute>
      },
      {
        path: "update-event/:id",
        element: <PrivateRoute><UpdateEvent /></PrivateRoute>,
        // loader: async({params}) => fetch(`https://co2bd-server.vercel.app/event/${params.id}`)
        // loader: async ({ params }) => fetch(`http://localhost:5000/event/${params.id}`)
      },
      {
        path: "/about-us",
        Component: AboutUs
      },
      {
        path: "/faq",
        Component: FAQSection
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "admin-stats",
        element: <Stats />
      },
      {
        path: "users",
        Component: Users
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

export default router