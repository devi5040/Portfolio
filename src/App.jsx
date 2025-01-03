import React from "react";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./sections/Error";
import Footer from "./sections/Footer";

function App() {
  const all = (
    <>
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={all} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
