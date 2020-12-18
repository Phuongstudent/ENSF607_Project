import React from "react";
import '../App.css';


export default class CourseInformation extends React.Component {
    state = {
        courseCode: "",
        courseTitle: "",
        courseDescription: "",
        courseHours: "",
        academicCredit: "",
        calendarReference: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    render() {
        return (
           <header
                className = "text">
                <h2>Calendar Information</h2>
                <div>
                    <input
                        name = "courseCode"
                        placeholder = "Course Code"
                        value = {this.state.courseCode}
                        onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <input
                        name = "courseTitle"
                        placeholder = "Course Title"
                        value = {this.state.courseTitle}
                        onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <textarea
                        name = "courseDescription"
                        placeholder = "Course Description"
                        value = {this.state.courseCode}
                        onChange = {this.handleChange}
                    />
                </div>
                <table>
                    <tr>
                        <td>Course Hours</td>
                        <td>
                            <input
                                name = "courseHours"
                                value = {this.state.courseHours}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Academic Credit:</td>
                        <td>
                            <input
                                name = "academicCredit"
                                value = {this.state.academicCredit}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Calendar Reference:</td>
                        <td>
                            <input
                                name = "calendarReference"
                                value = {this.state.calendarReference}
                                onChange = {this.handleChange}
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
}