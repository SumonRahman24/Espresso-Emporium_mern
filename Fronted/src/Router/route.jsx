import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "./../pages/Home/Home";
import AddCoffe from "../components/AddCoffe/AddCoffe";
import Details from "../pages/Details/Details";
import UpateProduct from "./../pages/UpdateProduct/UpateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/addCoffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffe />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/addCoffee/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/addCoffee/${params.id}`),
      },
    ],
  },
]);

export default router;
