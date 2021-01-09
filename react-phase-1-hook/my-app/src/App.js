import React, {useState} from "react";
import "./App.css";
import "bulma/css/bulma.css";
import LearningOutcome from "./components/LearningOutcome";
import CourseContentCategory from "./components/CourseContentCategory";
import CourseSectionInformation from "./components/CourseSectionInformation";
import CourseInformation from "./components/CourseInformation";



function App() {
  
  return (
    <div>
      <div>
        <CourseInformation/>
      </div>
      <div>
        <LearningOutcome/>
      </div>
      <div>
        <CourseContentCategory/>
      </div>
      <div>
        <CourseSectionInformation/>
      </div>
    
    </div>
 

  );
}

export default App;