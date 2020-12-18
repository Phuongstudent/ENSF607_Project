
import React from "react";
import './App.css';
import LaboratoryExperience from "./components/LaboratoryExperience";
import FinalGradeDetermination from "./components/FinalGradeDetermination";
import CourseInformation from "./components/CourseInformation";
import LearningOutcomes from "./components/LearningOutcomes";
import CourseSectionInformation from "./components/CourseSectionInformation";


class App extends React.Component {
  render() {
    return (
      <div className = "App">
        <CourseInformation/>
        <hr></hr>
        <LearningOutcomes/>
        <CourseSectionInformation/>
        <LaboratoryExperience/>
        <hr></hr>
        <FinalGradeDetermination/>
      </div>
    );
  }
}

export default App;
