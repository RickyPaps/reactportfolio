import React, { useEffect, useState } from "react";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Cv from "./components/CV/Cv";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  const [resumeData, setresumeData] = useState({});
  const [sharedData, setsharedData] = useState({});

  useEffect(() => {
    const getSharedData = async () => {
      const response = await fetch("./portfolio_shared_data.json");
      const data = await response.json();
      setsharedData(data);
    };
    loadResumeFromPath("res_primaryLanguage.json");
    getSharedData();
  }, []);

  const loadResumeFromPath = async (path) => {
    const response = await fetch(path);
    const data = await response.json();
    setresumeData(data);
  };

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <Cv />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Contact />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
};

export default App;
