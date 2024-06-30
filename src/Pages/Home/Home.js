import React from "react";

import About from "../../Components/About/About";
import Service from "../../Components/Service/Service";
import Technologies from "../../Components/Technologies/Technologies";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Technologies />
      <Contact />
    </div>
  );
}

export default Home;
