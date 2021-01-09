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
      <br>
      </br>
      <div>
        <LearningOutcome/>
      </div>
      <br>
      </br>
      <div>
        <CourseContentCategory/>
      </div>
      <br>
      </br>
      <div>
        <CourseSectionInformation/>
      </div>
      <br>
      </br>
    
    </div>
 

  );
}

export default App;