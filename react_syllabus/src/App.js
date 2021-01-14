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
import SyllabusTable from "./form/Syllabus";

// import Navigation from "./Navigation";

import "./App.css"

export default function App() {

  const [page, setPage] = React.useState("")
  const renderChoice = () => {
      if (page === "CourseInformation"){
          return <CourseInformation 
          courseCode = {courseCode}
          setCourseCode = {setCourseCode}
          courseTitle = {courseTitle}
          setCourseTitle = {setCourseTitle}
          courseDescription = {courseDescription}
          setCourseDescription = {setCourseDescription}
          courseHours = {courseHours}
          setCourseHours = {setCourseHours}
          academicCredit = {academicCredit}
          setAcademicCredit = {setAcademicCredit}
          calendarReference = {calendarReference}
          setCalendarReference = {setCalendarReference}
          saveIndex = {0}
        /> ;
      } else if (page === "LearningOutcomes"){
          return <div><LearningOutcomes 
          learningOutcomes = {learningOutcomes}
          setLearningOutcomes = {setLearningOutcomes}
          saveIndex = {1}
        /><LearningGraduateTable/>
        <LearningLevelTable/>
        <CourseContentCategories
          courseCategory = {courseCategory}
          setCourseCategory = {setCourseCategory}
          saveIndex = {2}
        />
        <CourseSectionInformation
          courseSection = {courseSection}
          setCourseSection = {setCourseSection}
          saveIndex = {3}
        />
        <LaboratoryExperience 
          labType = {labType}
          setLabType = {setLabType}
          labNumber = {labNumber}
          setLabNumber = {setLabNumber}
          safetyTaught = {safetyTaught}
          setSafetyTaught = {setSafetyTaught}
          safetyExamined = {safetyExamined}
          setSafetyExamined = {setSafetyExamined}
          saveIndex = {4}
        /></div>;
      } 
      else if(page === "FinalGradeDetermination"){
        return <div><FinalGradeDetermination
        gradeRows = {gradeRows}
        setGradeRows = {setGradeRows}
        saveIndex = {5}
      />
      <FinalGradeNotes  
        gradeNotes = {gradeNotes}
        setGradeNotes = {setGradeNotes}
        saveIndex = {6}
      />
      <FinalGradeMarks 
        finalGradeText = {finalGradeText}
        setFinalGradeText = {setFinalGradeText}
        saveIndex = {7}
      /></div>
      } 
      else {
        return <SyllabusTable 
        syllabusArray = {syllabusArray}
        setSyllabusArray = {setSyllabusArray}
        saveIndex = {8}
        pageIndex = {index}
        setPageIndex = {setIndex}/>;
      }

  }


  const url = "http://localhost:8000/api/"
  const calendar = url + "calendar/"
  const learning = url + "learning/"
  const grades = url + "grades/"
  const syllabus = url + "syllabustable/"


  const[syllabusAPI, setSyllabusAPI] = useState("")
  const [calendarAPI, setCalendarAPI] = useState("")
  const [learningAPI, setLearningAPI] = useState("")
  const [gradesAPI, setGradesAPI] = useState("")
  const [saveStatus, setSaveStatus] = useState(1)
  const [index, setIndex] = useState(0)

  const [syllabusData, setSyllabusData] = useState("")
  const [calendarData, setCalendarData] = useState("")
  const [learningData, setLearningData] = useState("")
  const [gradesData, setGradesData] = useState("")

  const [queryFlag, setQueryFlag] = useState(0)

  // GET API, update data upon change of index
  useEffect(() => {
    const fetchData = async() => {

      await axios.get(syllabus)
        .then(response => setSyllabusAPI(response.data))
        .catch(() => console.error("API Error"));

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
  }, [calendar, learning, grades, syllabus, queryFlag])

  useEffect(() => {
    setCalendarData(calendarAPI[index])
  }, [index, calendarAPI])

  useEffect(() => {
    setLearningData(learningAPI[index])
  }, [index, learningAPI])

  useEffect(() => {
    setGradesData(gradesAPI[index])
  }, [index, gradesAPI])

  useEffect(() => {
    setSyllabusData(syllabusAPI)
  }, [index, syllabusAPI])


  // COURSE INFORMATION
  const [courseCode, setCourseCode] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseHours, setCourseHours] = useState("");
  const [academicCredit, setAcademicCredit] = useState("");
  const [calendarReference, setCalendarReference] = useState("");

  useEffect(() => {
    if (!calendarData) {
        setCourseCode("")
        setCourseTitle("")
        setCourseDescription("")
        setCourseHours("")
        setAcademicCredit("")
        setCalendarReference("")
    }
    else {
        setCourseCode(calendarData.course_code)
        setCourseTitle(calendarData.course_title)
        setCourseDescription(calendarData.course_description)
        setCourseHours(calendarData.course_hours)
        setAcademicCredit(calendarData.course_credit)
        setCalendarReference(calendarData.course_reference)
    }
  }, [calendarData])

  // LEARNING OUTCOME
  const [learningOutcomes, setLearningOutcomes] = useState([{outcome : " ", grad: "A1", level: "A"}])

  useEffect(() => {
    if (!learningData) {
      setLearningOutcomes([{outcome : " ", grad: "A1", level: "A"}])
    }
    else {
        let temp = learningData.learning_outcomes.split("%outcome%")
        let tempLearningOutcomes = []
        for (let i = 0; i < temp.length; i++){
            let tempIndex = temp[i].split("%i%")
            tempLearningOutcomes = ([...tempLearningOutcomes, 
                {
                    outcome: tempIndex[0],
                    grad: tempIndex[1],
                    level: tempIndex[2]
                }
            ]);
        }
        setLearningOutcomes(tempLearningOutcomes)
  }
  }, [learningData])

  // COURSE CONTENT CATEGORIES
  const [courseCategory, setCourseCategory] = useState([
    {category: "Math", element1 : "", element2: "", AU: 5},
    {category: "NaturalScience", element1 : "", element2: "", AU: 20},
    {category: "ComplementaryStudies", element1 : "", element2: "", AU: 20},
    {category: "EngineeringScience", element1 : "", element2: "", AU: 20},
    {category: "EngineeringDesign", element1 : "", element2: "", AU: 20},
  ]);

  useEffect(() => {
    if (!learningData) {
      return
    }
    else {
        setCourseCategory([
            {
                category: "Math",
                element1: learningData.content_math.split("%i%")[0],
                element2: learningData.content_math.split("%i%")[1],
                AU: learningData.content_math.split("%i%")[2]
            },
            {
                category: "NaturalScience",
                element1: learningData.content_naturalscience.split("%i%")[0],
                element2: learningData.content_naturalscience.split("%i%")[1],
                AU: learningData.content_naturalscience.split("%i%")[2]
            },
            {
                category: "ComplementaryStudies",
                element1: learningData.content_complementarystudies.split("%i%")[0],
                element2: learningData.content_complementarystudies.split("%i%")[1],
                AU: learningData.content_complementarystudies.split("%i%")[2]
            },
            {
                category: "EngineeringScience",
                element1: "",
                element2: "",
                AU: learningData.content_engineeringscience
            },
            {
                category: "EngineeringDesign",
                element1: "",
                element2: "",
                AU: learningData.content_engineeringdesign
            }
        ])
    }
  }, [learningData])

  // COURSE SECTION INFORMATION 
  const [courseSection, setCourseSection] = useState([
    {category: "Lecture", sections: "", hours: "", students: "lt5"},
    {category: "Tutorial", sections: "", hours: "", students: "gt50"},
    {category: "Lab", sections: "", hours: "", students: "20-50"}
  ]);

  useEffect(() => {
    if (!learningData) {
        setCourseSection([
            {category: "Lecture", sections: "", hours: "", students: "lt5"},
            {category: "Tutorial", sections: "", hours: "", students: "gt50"},
            {category: "Lab", sections: "", hours: "", students: "20-50"}
        ])
    }
    else {
        setCourseSection([
            {
                category: "Lecture",
                sections: learningData.section_lecture.split("%i%")[0],
                hours: learningData.section_lecture.split("%i%")[1],
                students: learningData.section_lecture.split("%i%")[2]
            },
            {
                category: "Tutorial",
                sections: learningData.section_tutorial.split("%i%")[0],
                hours: learningData.section_tutorial.split("%i%")[1],
                students: learningData.section_tutorial.split("%i%")[2]
            },
            {
                category: "Lab",
                sections: learningData.section_lab.split("%i%")[0],
                hours: learningData.section_lab.split("%i%")[1],
                students: learningData.section_lab.split("%i%")[2]
            }
        ])
    }
  }, [learningData])

  // LABORATORY EXPERIENCE
  const [labType, setLabType]  = useState("")
  const [labNumber, setLabNumber] = useState("")
  const [safetyTaught, setSafetyTaught] = useState("")
  const [safetyExamined, setSafetyExamined] = useState("")

  useEffect(() => {
    if (!learningData) {
        setLabType("")
        setLabNumber("")
        setSafetyTaught("")
        setSafetyExamined("")
    }
    else {
        setLabType(learningData.lab_type)
        setLabNumber(learningData.lab_number)
        setSafetyTaught(learningData.lab_safetytaught)
        setSafetyExamined(learningData.lab_safetyexaminer)
    }
  }, [learningData])

  // FINAL GRADE DETERMINATION
  const [gradeRows, setGradeRows] = useState([{component: " ", outcome: " ", weight: 0}])

  useEffect(() => {
    if (!gradesData) {
      setGradeRows([{component: " ", outcome: " ", weight: 0}])
    }
    else {
      let temp = gradesData.grade_components.split("%outcome%")
      let tempGradeNotes = []
      for (let i = 0; i < temp.length; i++){
          let tempIndex = temp[i].split("%i%")
          tempGradeNotes = ([...tempGradeNotes, 
              {
                  component: tempIndex[0],
                  outcome: tempIndex[1],
                  weight: tempIndex[2]
              }
          ]);
      }
      setGradeRows(tempGradeNotes)
    }
  }, [gradesData])

  // FINAL GRADE NOTES
  const [gradeNotes, setGradeNotes] = useState([""])

  useEffect(() => {
    if (!gradesData) {
        setGradeNotes([""])
    }
    else {
        setGradeNotes(gradesData.grade_notes.split("%note%"))
    }
  }, [gradesData])

  // FINAL GRADE MARKS
  const [finalGradeText, setFinalGradeText] = useState("0 0 0 0 0 0 0 0 0 0 0".split(" "))

  useEffect(() => {
    if (!gradesData) {
      return
    }
    else {
        setFinalGradeText(gradesData.grade_marks.split(" "))
  }
  }, [gradesData])


  //Syllabus Table
  const [syllabusArray, setSyllabusArray] = useState([
    {syllabusName: " ", syllabusNumber: 0}
]);

useEffect(() => {       
  if (!syllabusData) {
      setSyllabusArray([{syllabusName: " ", syllabusNumber: 0}])
  }
  else {
      
      let temp = syllabusData
      let tempSyllabusArray = []
      for (let i = 0; i < temp.length; i++){
          let tempIndex = temp[i]
          tempSyllabusArray = ([...tempSyllabusArray, 
              {
                  
                  syllabusName: tempIndex.syllabus_name,
                  syllabusNumber: tempIndex.syllabus_number
             
              }
          ]);
      }
      setSyllabusArray(tempSyllabusArray)
  }
}, [syllabusData])


  // POST and PUT API, export to PDF
  const exportToPDF = () => {
    console.log("EXPORT TO PDF FUNCTION")
  }

  const postAPI = () => {
    axios.post(syllabus, {
      syllabus_name: 'test',
      syllabus_number: calendarAPI.length
     })
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

  const saveButton = () => {
    setSaveStatus(0)
  }

  useEffect(() => {
    if (saveStatus === 1) {
      return
    }

    putAPI(
      calendarData.url.split("/")[5],
      calendar,
      {
        course_code: courseCode,
        course_title: courseTitle,
        course_description: courseDescription,
        course_hours: courseHours,
        course_credit: academicCredit,
        course_reference: calendarReference
      }
    )

    let putLearningOutcomes = ""
    for (let i = 0; i < learningOutcomes.length; i++) {
      putLearningOutcomes += learningOutcomes[i]["outcome"] + "%i%" + learningOutcomes[i]["grad"] + "%i%" + learningOutcomes[i]["level"]
      if (i !== learningOutcomes.length - 1) {
        putLearningOutcomes += "%outcome%"
      }
    }


    let putContentMath = ""
    let putContentNat = ""
    let putContentComp = ""
    let putContentEngSci = ""
    let putContentEngDes = ""
    for (let i = 0; i < courseCategory.length; i++) {
      if (i === 0) {
        putContentMath = courseCategory[i]["element1"] + "%i%" + courseCategory[i]["element2"] + "%i%" + courseCategory[i]["AU"]
      }
      if (i === 1) {
        putContentNat = courseCategory[i]["element1"] + "%i%" + courseCategory[i]["element2"] + "%i%" + courseCategory[i]["AU"]
      }
      if (i === 2) {
        putContentComp = courseCategory[i]["element1"] + "%i%" + courseCategory[i]["element2"] + "%i%" + courseCategory[i]["AU"]
      }
      if (i === 3) {
        putContentEngSci = courseCategory[i]["AU"]
      }
      if (i === 4) {
        putContentEngDes = courseCategory[i]["AU"]
      }
    }

    let putSectionLecture = ""
    let putSectionTutorial = ""
    let putSectionLab = ""
    for (let i = 0; i < courseSection.length; i++) {
      if (i === 0){
        putSectionLecture = courseSection[i]["sections"] + "%i%" + courseSection[i]["hours"] + "%i%" + courseSection[i]["students"]
      }
      if (i === 1) {
        putSectionTutorial = courseSection[i]["sections"] + "%i%" + courseSection[i]["hours"] + "%i%" + courseSection[i]["students"]
      }
      if (i === 2) {
        putSectionLab = courseSection[i]["sections"] + "%i%" + courseSection[i]["hours"] + "%i%" + courseSection[i]["students"]
      }
    }

    putAPI(
      learningData.url.split("/")[5],
      learning,
      {
        learning_outcomes: putLearningOutcomes,
        content_math: putContentMath,
        content_naturalscience: putContentNat,
        content_complementarystudies: putContentComp,
        content_engineeringscience: putContentEngSci,
        content_engineeringdesign: putContentEngDes,
        section_lecture: putSectionLecture,
        section_tutorial: putSectionTutorial,
        section_lab: putSectionLab,
        lab_type: labType,
        lab_number: labNumber,
        lab_safetytaught: safetyTaught,
        lab_safetyexaminer: safetyExamined
      }
    )

    let putGradeComponents = ""
    for(let i = 0; i < gradeRows.length; i++) {
      putGradeComponents += gradeRows[i]["component"] + "%i%" + gradeRows[i]["outcome"] + "%i%" + gradeRows[i]["weight"]

      if (i !== gradeRows.length - 1) {
        putGradeComponents += "%outcome%"
      }
    }

    let putGradeNotes = ""
    for(let i = 0; i < gradeNotes.length; i++) {
      putGradeNotes += gradeNotes[i]
      if (i !== gradeNotes.length - 1) {
        putGradeNotes += "%note%"
      }
    }

    let putGradeText = ""
    for (let i = 0; i < finalGradeText.length; i++) {
      putGradeText += finalGradeText[i]
      if (i !== finalGradeText.length - 1) {
        putGradeText += " "
      }
    }

    putAPI(
      gradesData.url.split("/")[5],
      grades,
      {
        grade_components: putGradeComponents,
        grade_notes: putGradeNotes,
        grade_marks: putGradeText
      }
    )

    //Syllabus Table
    let putSyllabusNumber = 0;
    let putSyllabusName = courseCode;

    
    
    putAPI(
      syllabusData.url.split("/")[5], //Why is it 5?
      syllabus,
      {
        syllabusNumber : putSyllabusNumber,
        syllabusName : putSyllabusName,
      }
    )


    setQueryFlag(!queryFlag)
    setSaveStatus(1)
  }, [saveStatus])

  const putAPI = (putIndex, apiURL, data) => {
    let url_index = apiURL + putIndex + "/"

    console.log(url_index)
    console.log(data)

    axios.put(url_index, data)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const renderSaveButton = () => {
    if (saveStatus === 1) {
      return (
        <footer className ="footer">
          <div className = "buttons is-centered">
            <button className ="button is-success" onClick = {saveButton}>Save changes</button>
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
      {renderChoice()}
      {renderSaveButton()}

      {/* <Navigation/> */}

    </div>
  );
}