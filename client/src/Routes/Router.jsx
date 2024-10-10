import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-primary text-secondary">Hello world!</div>,
  },
]);

export default router;
