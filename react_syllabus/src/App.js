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

import Navigation from "./Navigation";

import "./App.css"

function App() {
  const url = "http://localhost:8000/api/"
  const calendar = url + "calendar/"
  const learning = url + "learning/"
  const grades = url + "grades/"

  const [calendarAPI, setCalendarAPI] = useState("")
  const [learningAPI, setLearningAPI] = useState("")
  const [gradesAPI, setGradesAPI] = useState("")
  const [saveStatus, setSaveStatus] = useState([1, 1, 1, 1, 1, 1, 1, 1])
  const [saveFlag, setSaveFlag] = useState(0)
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

  const setSaveStatusByIndex = index => {
    let tempSaveStatus = [...saveStatus]
    tempSaveStatus[index] = 1;
    setSaveStatus(tempSaveStatus)
  }

  const renderSaveButton = () => {
    for (let i = 0; i < saveStatus.length; i++) {
      if (saveStatus[i] === 1) {
        return (
          <footer className ="footer">
            <div className = "buttons is-centered">
              <button className ="button is-success" onClick = {() => 
                {
                  setSaveStatus([0, 0, 0, 0, 0, 0, 0, 0]) 
                  setSaveFlag(!saveFlag)
                }
              }>Save changes</button>
            </div>
          </footer>
        )
      }
    }
    return (
      <footer className ="footer">
        <div className = "buttons is-centered">
          <button className ="button is-success is-loading">Save changes</button>
        </div>
      </footer>
    )
  }

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>

      <Header/>

      <button className = "button is-small" onClick = {() => {
        setIndex(index + 1)}
      }>Increase Index</button>
      
      <CourseInformation data = {calendarData} saveIndex = {0} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/> 

      <LearningOutcomes data = {learningData} saveIndex = {1} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>
      <LearningGraduateTable/>
      <LearningLevelTable/>
      <CourseContentCategories data = {learningData} saveIndex = {2} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>
      <CourseSectionInformation data = {learningData} saveIndex = {3} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>
      <LaboratoryExperience data = {learningData} saveIndex = {4} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>

      <FinalGradeDetermination data = {gradesData} saveIndex = {5} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>
      <FinalGradeNotes data = {gradesData} saveIndex = {6} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>
      <FinalGradeMarks data = {gradesData} saveIndex = {7} saveFlag = {saveFlag} saveFunction = {setSaveStatusByIndex}/>

      renderSaveButton()

      {/* <Navigation/> */}

    </div>
  );
}

export default App;
