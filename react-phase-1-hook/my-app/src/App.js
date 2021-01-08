import React, {useState} from "react";
import "./App.css";
import LearningOutcome from "./components/LearningOutcome";
import CourseContentCategory from "./components/CourseContentCategory";
import CourseSectionInformation from "./components/CourseSectionInformation";
import CourseInformation from "./components/CourseInformation";



function App() {
  
  return (
    <div>
    <CourseInformation/>
    <LearningOutcome/>
    <CourseContentCategory/>
    
    </div>
 

  );
}

export default App;