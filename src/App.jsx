import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import AuthLayout from "./Components/LoginLayout.jsx";
import Sent from "./Pages/Sent.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx"
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ],
    },
    {
      path: "/signup",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <SignUp />
        }
      ],
    },
    {
      path: "/signin",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <SignIn />
        }
      ],
    },
    {
      path: "/sent",
      element: <Sent />,

    }
    // {
    //   path: "admin",
    //   element: <AdminLogin />,
    // },
    // {
    //   path: "forgotpassword",
    //   element: <ForgotPassword />,
    // },

    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
    // {
    //   path: "login",
    //   element: <Login />,
    // },
    // {
    //   path: "confirmLink",
    //   element: <PasswordSentPage />,
    // },
    // {
    //   path: "confirm-invite",
    //   element: <CompleteInvitation />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
