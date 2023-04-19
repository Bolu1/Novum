import React from "react";
import Navbar from "../layout/Navbar";
import { motion, useIsPresent } from "framer-motion";
// import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Hero from "../components/Home2/Hero";
import About from "../components/Home2/About";
import AboutDoctor from "../components/Home2/AboutDoctor";
import Services from "../components/Home2/Services";
import Contact from "../components/Home2/Contact";
import Foote from "../components/Home2/Foote";
import SmoothScroll from "../global/SmoothScroll";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const isPresent = useIsPresent();
  return (
    <div>
          <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
      />
      <Navbar />
        <Hero />
        <About />
        <Services />
        <AboutDoctor />
        <Contact toast={toast}/>
        <Foote />
      {/* <Hero /> */}
      {/* <Projects /> */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1.7, delay: 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: 1.7, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default Home;
