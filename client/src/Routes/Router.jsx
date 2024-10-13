import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorHome from "../Pages/DoctorProfile/DoctorHome/DoctorHome";
import Signup from "../Pages/SignUp/Signup";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Components/404 Page/ErrorPage";
import Appointment from "../Pages/Appoinement/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/DoctorProfile",
        element: <DoctorHome />,
      },
      {
        path: "/Appoinement",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Login",
    element: <SignIn />,
  },
]);

export default router;
