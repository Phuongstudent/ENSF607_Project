import React, { useEffect, useState } from "react";
import axios from "axios";

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

// import Navigation from "./Navigation";

import "./App.css"

function App() {
  const url = "http://localhost:8000/api/"
  const calendar = url + "calendar/"
  const learning = url + "learning/"
  const grades = url + "grades/"

  const [calendarAPI, setCalendarAPI] = useState("")
  const [learningAPI, setLearningAPI] = useState("")
  const [gradesAPI, setGradesAPI] = useState("")
  const [index, setIndex] = useState(0)

  const [calendarData, setCalendarData] = useState("")
  const [learningData, setLearningData] = useState("")
  const [gradesData, setGradesData] = useState("")

  useEffect(() => {
    const fetchData = async() => {
      await axios.get(calendar)
        .then(response => setCalendarAPI(response.data))
        .catch(() => console.error("API Error"));

      await axios.get(learning)
        .then(response => setLearningAPI(response.data))
        .catch(() => console.error("API Error"));

      await axios.get(grades)
        .then(response => setGradesAPI(response.data))
        .catch(() => console.error("API Error"));
    }
    fetchData()
  }, [calendar, learning, grades])

  useEffect(() => {
    setCalendarData(calendarAPI[index])
  }, [index, calendarAPI])

  useEffect(() => {
    setLearningData(learningAPI[index])
  }, [index, learningAPI])

  useEffect(() => {
    setGradesData(gradesAPI[index])
  }, [index, gradesAPI])
  
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>

      <Header/>
      
      <CourseInformation data = {calendarData}/> 

      <LearningOutcomes data = {learningData}/>
      <LearningGraduateTable data = {learningData}/>
      <LearningLevelTable data = {learningData}/>
      <CourseContentCategories data = {learningData}/>
      <CourseSectionInformation data = {learningData}/>
      <LaboratoryExperience data = {learningData}/>

      <FinalGradeDetermination data = {gradesData}/>
      <FinalGradeNotes data = {gradesData}/>
      <FinalGradeMarks data = {gradesData}/>

      {/* <Navigation/> */}

    </div>
  );
}

export default App;
