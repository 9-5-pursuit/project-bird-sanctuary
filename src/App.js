import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Home,
  About,
  Gallery,
  SingleBird,
  Cart,
  Checkout,
  Error,
} from "./pages";

import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<SingleBird />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
