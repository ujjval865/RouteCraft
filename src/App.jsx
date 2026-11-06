import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomCursor from "./components/common/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import TripPlanner from "./pages/TripPlanner";
import MyTrips from "./pages/MyTrips";
import TripDetails from "./pages/TripDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan-trip" element={<TripPlanner />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/my-trips/:id" element={<TripDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
