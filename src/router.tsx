import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Rent from "./components/Rent/Rent.component";
import Search from "./components/Search/Search.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: "rent",
        element: <Rent />,
      },
    ],
  },
]);

export default router;
