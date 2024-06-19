import { useState } from "react";
import {
  Navbar,
  Home,
  About,
  Expertise,
  Projects,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
