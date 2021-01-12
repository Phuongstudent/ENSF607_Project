import React, { useState } from "react";
import '../App.css';


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
                <div>
                    <input
                        name = "courseCode"
                        placeholder = "Course Code"
                        value = {courseCode}
                        onChange = { (text) =>setCourseCode(text)}
                    />
                </div>
                <div>
                    <input
                        name = "courseTitle"
                        placeholder = "Course Title"
                        value = {courseTitle}
                        onChange = {(text) =>setCourseTitle(text)}
                    />
                </div>
                <div>
                    <textarea
                        name = "courseDescription"
                        placeholder = "Course Description"
                        value = {courseDescription}
                        onChange = {(text) =>setCourseDescription(text)}
                    />
                </div>
                <table>
                    <tr>
                        <td>Course Hours</td>
                        <td>
                            <input
                                name = "courseHours"
                                value = {courseHours}
                                onChange = {(text) =>setCourseHours(text)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Academic Credit:</td>
                        <td>
                            <input
                                name = "academicCredit"
                                value = {academicCredit}
                                onChange = {(text) =>setAcademicCredit(text)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Calendar Reference:</td>
                        <td>
                            <input
                                name = "calendarReference"
                                value = {calendarReference}
                                onChange = {(text) =>setCalendarReference(text)}
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

export function CourseInformation()