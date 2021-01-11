import Header from "./login/Header";
import CourseInformation from "./form/CourseInformation";
import LearningOutcomes from "./form/LearningOutcomes";
import LearningLevelTable from "./form/LearningLevelTable";
import CourseContentCategories from "./form/CourseContentCategories";
import CourseSectionInformation from "./form/CourseSectionInformation";
import LearningGraduateTable from "./form/LearningGraduateTable";
import LaboratoryExperience from "./form/LaboratoryExperience";
import FinalGradeDetermination from "./form/FinalGradeDetermination";
import FinalGradeNotes from "./form/FinalGradeNotes";
import FinalGradeMarks from "./form/FinalGradeMarks";

import "./App.css"

function App() {

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>

      <Header/>
      <CourseInformation/> 
      <LearningOutcomes/>
      <LearningGraduateTable/>
      
      <LearningLevelTable/>
      <CourseContentCategories/>
      <CourseSectionInformation/>
      <LaboratoryExperience/>
      <FinalGradeDetermination/>
      <FinalGradeNotes/>
      <FinalGradeMarks/>
    </div>
  );
}

export default App;
