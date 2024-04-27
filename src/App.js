import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import ApplicationLayout from "./components/ApplicationLayout";
import MainLayout from "./components/MainLayout";
import SkillsSection from "./components/SkillsSection";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Projectlist from "./components/Projectlist";

function App() {
  return (
    <Router>
      <ApplicationLayout>
        <MainLayout />
        <Experience/>
        <SkillsSection/>
        
        <AboutMe/>
        <Projectlist/>
      </ApplicationLayout>
    </Router>
  );
}

export default App;
