import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import heart from "../../assets/images/home/heart.jpg"
import grouphero from "../../assets/images/home/grouphero.jpg"


const blinkVariants = {
  closed: {
    scaleY: 0,
    transition: { duration: 0.1 },
  },
  open: {
    scaleY: 1,
    transition: { duration: 0.1 },
  },
};
const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset <= 4450);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const eyeRef = useRef(null);
  const retinaRef = useRef(null);
  const blink = useAnimation();

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorX(e.clientX);
  //     setCursorY(e.clientY);
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsOpen(!isOpen);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [isOpen]);

  // useEffect(() => {
  //   const retina = retinaRef.current;
  //   const eye = eyeRef.current;
  //   if (!eye || !retina) return;
  //   const eyeBox = eye.getBoundingClientRect();
  //   const x = cursorX - eyeBox.left - eyeBox.width / 2;
  //   const y = cursorY - eyeBox.top - eyeBox.height / 2;
  //   retina.style.transform = `translate(${x}px, ${y}px)`;
  // }, [cursorX, cursorY]);

  useEffect(() => {
    const eye = document.querySelectorAll(".eyes");
    document
      .querySelector("body")
      .addEventListener("mousemove", handleMouseMove);

    function handleMouseMove(e) {
      eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    }
    return () => {
      document
        .querySelector("body")
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
    id="home"
    className="w-full bg-white text-black mt-[5rem]">
      <AnimatePresence exitBeforeEnter>
        {/* mobile */}
        {/* <div className="w-full h-[45rem] relative lg:hidden flex pt-20 bg-white text-black">
          <div className="w-full  space-y-10 h-full flex justify-center flex-col">
            <div className="w-full h-[14rem] ">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[42px] font-[600] text-center large-texts "
              >
                Bolu Adetifa
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-[24px] text-center"
              >
                A software developer with three years of experience in building full stack software with modern technologies mainly in backend engineering. With interest in building software products to provide value for people. I currently use JavaScript and Golang.
              </motion.p>
            </div>
            <div className="w-full h-[20rem]  flex justify-center  ">
            <div className="my-[10rem]  lg:max-w-[20.5rem] max-w-[20.5rem] ">
                <img 
                src={"https://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/bgn-slider-01.jpg"} 

                />
              </div>
            </div>
          </div>


        </div> */}
        {/* desktop */}
        {/* <SmoothScroll> */}
        {/* <div className="w- h-[45rem] lg:flex hidden mx-auto 2xl:max-w-[90rem] lg:max-w-[75rem]"> */}
        <div className="h-[45rem] overflow-hidden relative  backdrop-brightness-80">
          <div className="w-full h-full absolute">
            <img
              src={
                heart
              }
              alt=""
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="absolute w-[90%]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[50px] uppercase text-white font-extrabold">
              Novum
            </h1>
            <div className=" mt-2 space-y-4">
              <p className="text-white text-lg w-2/3">
                offering confidential and holistic services towards promoting
                the mental health, physical, and social concerns of individuals
                while ensuring optimal integration and sustainability of values
                within the community.
              </p>

              <button
               class="px-4 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 rounded-lg  ">
               <a href="appointment">
                Book Appointment
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* </SmoothScroll> */}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
//  <motion.div
//    ref={eyeRef}
//    animate={isOpen ? "open" : "closed"}
//    variants={blinkVariants}
//    style={{
//      width: "60px",
//      height: "35px",
//      background: "white",
//      borderRadius: "50%",
//      transform: "rotate(15deg)",
//      overflow: "hidden",
//      position: "relative",
//    }}
//  >
//    <motion.div
//      ref={retinaRef}
//      style={{
//        width: "20px",
//        height: "20px",
//        background: "black",
//        borderRadius: "50%",
//        position: "absolute",
//        top: 0,
//        left: 0,
//        transform: "translate(0, 0)",
//      }}
//    />
//  </motion.div>;
