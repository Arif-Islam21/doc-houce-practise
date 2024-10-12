import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorHome from "../Pages/DoctorProfile/DoctorHome/DoctorHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/DoctorProfile",
        element: <DoctorHome />,
      },
    ],
  },
]);

export default router;
