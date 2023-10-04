import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./layout/RouteScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import HomeDashboard from "./pages/HomeDashboard";
import HomePageContentEdit from "./pages/HomePageContentEdit";
import AboutPageContentEdit from "./pages/AboutPageContentEdit";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* Dashboard */}
        <Route exact path="/dashboard" element={<HomeDashboard />} />
        <Route
          exact
          path="/home-page-content-edit"
          element={<HomePageContentEdit />}
        />
        <Route
          exact
          path="/about-page-content-edit"
          element={<AboutPageContentEdit />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
