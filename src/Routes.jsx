import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export { routes };
