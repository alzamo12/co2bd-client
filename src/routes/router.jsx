import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            index: true,
            element: <span>Thsi is Home Page</span>
        }
    ]
  },
]);

export default router