import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorHome from "../Pages/DoctorProfile/DoctorHome/DoctorHome";
import Signup from "../Pages/SignUp/Signup";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Components/404 Page/ErrorPage";
import Appointment from "../Pages/Appoinement/Appointment";
import Dashboard from "../Layouts/Dashboard";
import MyAppoinemensts from "../Pages/DashBoard/UserDashboard/MyAppoinement/MyAppoinemensts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
  {
    path: "DashBoard",
    element: <Dashboard />,
    children: [
      {
        path: "Appoinemnts",
        element: <MyAppoinemensts />,
      },
    ],
  },
]);

export default router;
