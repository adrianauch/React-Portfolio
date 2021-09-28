import React from "react";
import About from "./components/about";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
