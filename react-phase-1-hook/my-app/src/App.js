import React, {useState} from "react";
import "./App.css";
import "bulma/css/bulma.css";
import LearningOutcome from "./components/LearningOutcome";
import CourseContentCategory from "./components/CourseContentCategory";
import CourseSectionInformation from "./components/CourseSectionInformation";
import CourseInformation from "./components/CourseInformation";
import Navigation from "./components/Navigation";



function App() {
  
  return (
    <div>
      <div>
        <Navigation/>
      </div>  
    </div>
 

  );
}

export default App;