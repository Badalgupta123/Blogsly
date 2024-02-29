import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NotFound from "./pages/NotFound";
import CreateBlog from "./pages/CreateBlog";
import Header from "./components/Header";
import Footer from "./components/Footer";
const BloggerDetails = React.lazy(() => import("./pages/BloggerDetails"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const BlogDetails = React.lazy(() => import("./pages/BlogDetails"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return  <React.Suspense fallback={<>Loading...</>}>
    <Router>
      <Header className="flex items-center justify-center md:px-5 w-full"/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bloggerdetails" element={<BloggerDetails />} />
         <Route path="/createblog" element={<CreateBlog/>}/>
      </Routes>
      <Footer className="bg-gray-600 flex items-center justify-center mt-[129px] md:px-5 w-full"/>
    </Router>
</React.Suspense>;
}

export default App;
