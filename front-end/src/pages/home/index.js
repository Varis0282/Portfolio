import React from "react";
import Header from "../../components/Header"; // eslint-disable-line
import Intro from "../../pages/home/intro";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education"
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Education />
          <Projects />
          <Experience />
          <Courses />
          <Contact />
          <Footer />
          <SideBar />
        </div>
      )}
    </div>
  );
}

export default Home;
