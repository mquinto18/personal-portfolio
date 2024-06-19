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

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Projects />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;
