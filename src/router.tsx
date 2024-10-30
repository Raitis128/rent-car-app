import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Rent from "./components/Rent/Rent.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "rent",
        element: <Rent />,
      },
    ],
  },
]);

export default router;
