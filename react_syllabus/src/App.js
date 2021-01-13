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

export default function App() {
  const url = "http://localhost:8000/api/"
  const calendar = url + "calendar/"
  const learning = url + "learning/"
  const grades = url + "grades/"

  const [calendarAPI, setCalendarAPI] = useState("")
  const [learningAPI, setLearningAPI] = useState("")
  const [gradesAPI, setGradesAPI] = useState("")
  const [saveStatus, setSaveStatus] = useState(8)
  const [index, setIndex] = useState(0)

  const [calendarData, setCalendarData] = useState("")
  const [learningData, setLearningData] = useState("")
  const [gradesData, setGradesData] = useState("")

  const [calendarSave, setCalendarSave] = useState([])
  const [learningSave, setLearningSave] = useState([])
  const [gradesSave, setGradesSave] = useState([])

  const [saveFlag, setSaveFlag] = useState(0)
  const [queryFlag, setQueryFlag] = useState(0)

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
  }, [calendar, learning, grades, queryFlag])

  useEffect(() => {
    setCalendarData(calendarAPI[index])
  }, [index, calendarAPI])

  useEffect(() => {
    setLearningData(learningAPI[index])
  }, [index, learningAPI])

  useEffect(() => {
    setGradesData(gradesAPI[index])
  }, [index, gradesAPI])
  

  const setSaveStatusByIndex = (saveIndex, data) => { // TODO
    setSaveStatus(saveStatus + 1)

    if (saveIndex === 0) {
      setCalendarSave(data)
    }

    else if (saveIndex >= 1 && saveIndex <= 4) {
      setLearningSave(...learningSave, data)
    } 
    else if (saveIndex >= 5 && saveIndex <= 7) {
      setGradesSave(...gradesSave, data)
    }

    console.log(saveStatus)
    console.log(calendarSave)

    if (saveStatus < 8) {
      return
    }

    // putAPI(calendarData.url.split("/")[5], calendar, calendarSave)
    // putAPI(learningData.url.split("/")[5], learning, learningSave)
    // putAPI(gradesData.url.split("/")[5], grades, gradesSave)
    
    setCalendarSave([])
    setLearningSave([])
    setGradesSave([])

    setQueryFlag(!queryFlag)
  }

  const exportToPDF = () => {

  }

  const putAPI = (putIndex, apiURL, data) => {
    let url_index = apiURL + putIndex + "/"

    console.log(url_index)
    console.log(data)

    axios.put(url_index, data)
  }

  const postAPI = () => {
     axios.post(calendar, {
       course_code: '',
       course_title: '',
       course_description: '',
       course_hours: '',
       course_credit: '',
       course_reference: ''
     })
     axios.post(learning, {
       learning_outcomes: '',
       content_math: 'blank%i%blank%i%0',
       content_naturalscience: 'blank%i%blank%i%0',
       content_complementarystudies: 'blank%i%blank%i%0',
       content_engineeringscience: '0',
       content_engineeringdesign: '0',
       section_lecture: ' %i% %i%blank',
       section_tutorial: ' %i% %i%blank',
       section_lab: ' %i% %i%blank',
       lab_type: '',
       lab_number: '',
       lab_safetytaught: '',
       lab_safetyexaminer: ''
     })
     axios.post(grades, {
       grade_components: ' %i% %i% ',
       grade_notes: '',
       grade_marks: '0 0 0 0 0 0 0 0 0 0 0'
     })
    scrollToTop()

    setQueryFlag(!queryFlag)
    setIndex(calendarAPI.length)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const renderSaveButton = () => {
    if (saveStatus === 8) {
      return (
        <footer className ="footer">
          <div className = "buttons is-centered">
            <button className ="button is-success" onClick = {() => 
              {
                setSaveStatus(0) 
                setSaveFlag(!saveFlag)
              }
            }>Save changes</button>
            <button className = "button is-success" onClick = {exportToPDF}>Export to PDF</button>
          </div>
          <div className = "buttons is-centered">
            <button className ="button is-primary" onClick = {() => {
              if (index > 0) {
                setIndex(index - 1)
              }
              }}>Prev</button>
            <button className ="button is-primary" onClick = {postAPI}>Create New Syllabus</button>
            <button className ="button is-primary" onClick = {() => {
              if (index < calendarAPI.length - 1) {
                setIndex(index + 1)
              }
              }}>Next</button>
          </div>  
          <div className = "buttons is-centered">
            <button className = "button is-success" onClick = {scrollToTop}>Back to Top</button>
            <button className = "button is-success" onClick = {exportToPDF}>Export to PDF</button>
          </div>          
        </footer>
      )
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

      {renderSaveButton()}

      {/* <Navigation/> */}

    </div>
  );
}