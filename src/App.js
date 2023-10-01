import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./layout/RouteScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

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
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
