import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import SideLinks from "./global/SideLinks";
import Spinner from "./global/Spinner";
import Appointment from "./Pages/Appointment";
import Home from "./Pages/Home";

// const routes = [{ path: "", element: <Home /> }];
function App() {
  // const element = useRoutes(routes);
  const location = useLocation();
  return (
    <div className="App bg-white">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="appointment" element={<Appointment />} />
          </Routes>
        </AnimatePresence>
      {/* <SideLinks /> */}
    </div>
  );
}

export default App;
