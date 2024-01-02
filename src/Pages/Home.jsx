import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import { HashLink } from "react-router-hash-link";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Header from "../Nav/Header";
import Projects from "../Components/Projects";
import Footer from "../Nav/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
