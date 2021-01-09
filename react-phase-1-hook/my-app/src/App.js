import React, {useState} from "react";
import "./App.css";
import LearningOutcome from "./components/LearningOutcome";
import CourseContentCategory from "./components/CourseContentCategory";
import CourseSectionInformation from "./components/CourseSectionInformation";



function App() {
  
  return (
    <div>
    <LearningOutcome/>
    <CourseContentCategory/>
    <CourseSectionInformation/>
    </div>
 

  );
}

export default App;