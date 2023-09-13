import { Routes, Route } from "react-router-dom";
import { About, Carrers, Home, Locations } from "../views";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
  );
};

export default Routing;
