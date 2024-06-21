import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords, auther }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={auther} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "73vh" }}>
        <Toaster />
        {/* <ToastContainer /> */}
        {children}{" "}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Thrift Plus - Give&Take",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  auther: "Priyanka",
};

export default Layout;
