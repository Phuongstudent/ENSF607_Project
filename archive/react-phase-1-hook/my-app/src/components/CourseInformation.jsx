import React, { useState } from "react";
import '../App.css';
import "bulma/css/bulma.css";


function CourseInformation() {
    const [courseCode, setCourseCode] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseHours, setCourseHours] = useState("");
    const [academicCredit, setAcademicCredit] = useState("");
    const [calendarReference, setCalendarReference] = useState("");

    // state = {
    //     courseCode: "",
    //     courseTitle: "",
    //     courseDescription: "",
    //     courseHours: "",
    //     academicCredit: "",
    //     calendarReference: ""
    // };

    // handleChange = event => {
    //     this.set
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    //     console.log(this.state)
    // };

    
        return (
           <header
                className = "text">
                <h2>Calendar Information</h2>
                <label class="label">Name</label>
                <div>
                    <input
                        class ="input"
                        type = "text"
                        name = "courseCode"
                        placeholder = "Course Code"
                        value = {courseCode}
                        onChange = { (event) =>setCourseCode(event.target.value)}
                    />
                </div>
                <label class="label">Course Title</label>
                <div>
                    <input
                        class ="input"
                        name = "courseTitle"
                        placeholder = "Course Title"
                        value = {courseTitle}
                        onChange = {(event) =>setCourseTitle(event.target.value)}
                    />
                </div>
             
                <div class = "field">
                    <label class="label">Course Description</label>
                    <div class="control">
                    <textarea
                        class="textarea"
                        name = "courseDescription"
                        placeholder = "Course Description"
                        value = {courseDescription}
                        onChange = {(event) =>setCourseDescription(event.target.value)}
                    />
                    </div>
                   
                </div>
                <table>
                    <tr>
                        <td>Course Hours</td>
                        <td>
                            <input
                                class ="input"
                                name = "courseHours"
                                value = {courseHours}
                                onChange = {(event) =>setCourseHours(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Academic Credit:</td>
                        <td>
                            <input
                                class ="input"
                                name = "academicCredit"
                                value = {academicCredit}
                                onChange = {(event) =>setAcademicCredit(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Calendar Reference:</td>
                        <td>
                            <input
                                class ="input"
                                name = "calendarReference"
                                value = {calendarReference}
                                onChange = {(event) =>setCalendarReference(event.target.value)}
                            />
                        </td>
                    </tr>
                  
                </table>

                <div>
                Enter your course's learning outcomes below and resize the row heights as necessary to display all text. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes.
                </div>
            </header> 
        );
 
}

export default CourseInformation;