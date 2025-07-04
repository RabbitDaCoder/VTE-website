import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Departments from "../pages/Departments";
import Events from "../pages/Events";
import Notice from "../pages/Notice";
import NotFound from "../components/NotFound";
import BlogDetails from "../components/UI/BlogDetails";
import DepartmentsDetails from "../components/UI/DepartmentsDetails";
import NoticeDetails from "../components/UI/NoticeDetails";
import EventDetails from "../components/UI/EventDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import CookiePolicy from "../pages/CookiePolicy";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/departments/:id",
        element: <DepartmentsDetails />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/notice/:id",
        element: <NoticeDetails />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
    ],
  },
]);

export default routes; // Add this line to export routes as default

// The Home and About components are simple functional components that return a div with their respective content.
