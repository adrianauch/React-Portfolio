import React from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import AboutMe from "./components/about/about";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <NavigationBar />
      <AboutMe />

      <Work />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
