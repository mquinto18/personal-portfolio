import { useState } from "react";
import {
  Navbar,
  Home,
  About,
  Expertise,
  Projects,
  Footer,
} from "./components/index";
import CustomCursor from "./components/container/CustomCursor"; // Import the CustomCursor component
import Contact from "./components/container/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;
