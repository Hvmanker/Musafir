import './App.css';
import Home from './components/Home.js'
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import SkeletonData from './components/SkeletonData.js';
import Scroll from './components/Scroll.js';
import Booking from './components/Booking.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <Router>
        <Scroll/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<SkeletonData/>} />
          <Route path="/booking/:heading" element={<Booking/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
