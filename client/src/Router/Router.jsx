import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import CheckOut from "../components/CheckOut";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
