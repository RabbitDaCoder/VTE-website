import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Blog from "../pages/Blog.jsx";
import Notice from "../pages/Notice.jsx";
import Events from "../pages/Events.jsx";
import Departments from "../pages/Departments.jsx";
import NotFound from "../components/NotFound.jsx";
import DepartmentsDetails from "../components/UI/DepartmentsDetails.jsx";
import NoticeDetails from "../components/UI/NoticeDetails.jsx";
import BlogDetails from "../components/UI/BlogDetails.jsx";
import Academia from "../pages/Academia.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "academica",
        element: <Academia />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "departments/:id",
        element: <DepartmentsDetails />,
      },
      {
        path: "notice/:id",
        element: <NoticeDetails />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;

// The createBrowserRouter function is used to create a router object that defines the routes for the application.
// The router object is then used in the main.tsx file to render the application with the defined routes.
// The routes include a root path that renders the App component, an index route that renders the
// Home component, and a nested route for the About page. An error element is also defined to handle any errors that may occur during routing.
// The App component serves as the main layout, including a header, footer, and a link to the About page.
// The Home and About components are simple functional components that return a div with their respective content.
