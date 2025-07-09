import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const { pathname } = useLocation();

  // routing to hash navlinks e.g /contact#faq
  // const location = useLocation();
  // useEffect(() => {
  //   if (location.hash) {
  //     const el = document.querySelector(location.hash);
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth" });
  //     } else {
  //       window.scrollTo({ top: 0, behavior: "smooth" });
  //     }
  //   }
  // }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <HelmetProvider>
      <Header />
      <div className="w-full h-full">
        <Outlet />
      </div>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
// The App component serves as the main layout for the application.
// It includes a header, a link to the About page, and a footer.
// The Outlet component is used to render the child routes defined in the router configuration.
// The Link component is used to navigate to the About page without reloading the application.
