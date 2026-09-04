import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import RequestQuote from "./pages/RequestQuote";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import BlogArticle from "./pages/BlogArticle";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/quote" element={<RequestQuote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;