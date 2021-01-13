import React from "react";

export default function CourseInformation(props) {
     const { 
        courseCode, setCourseCode, 
        courseTitle, setCourseTitle, 
        courseDescription, setCourseDescription,
        courseHours, setCourseHours, 
        academicCredit, setAcademicCredit, 
        calendarReference, 
        setCalendarReference
    } = props

    return (
        <div className = "container is-fluid">
            <h4 className = "title is-4">Calendar Information</h4>
            <label className = "label">Course Code</label>
            <div className = "field">
                <input
                    className = "input is-small"
                    name = "courseCode"
                    placeholder = "Course Code"
                    value = {courseCode}
                    onChange = {event => setCourseCode(event.target.value)}
                />
            </div>
            <label className = "label">Course Title</label>
            <div className = "field">
                <input
                    className = "input is-small"
                    name = "courseTitle"
                    placeholder = "Course Title"
                    value = {courseTitle}
                    onChange = {event =>setCourseTitle(event.target.value)}
                />
            </div>
            <label className = "label">Course Description</label>
            <div className = "field">
                <textarea
                    className = "textarea is-small"
                    name = "courseDescription"
                    placeholder = "Course Description"
                    value = {courseDescription}
                    onChange = {event => setCourseDescription(event.target.value)}
                />
            </div>
            <label className = "label">Course Hours</label>
            <div className = "field">
                <input
                    className = "input is-small"
                    name = "courseHours"
                    placeholder = "Course Hours"
                    value = {courseHours}
                    onChange = {event =>setCourseHours(event.target.value)}
                />
            </div>
            <label className = "label">Academic Credit</label>
            <div className = "field">
                <input
                    className = "input is-small"
                    name = "academicCredit"
                    placeholder = "Academic Credit"
                    value = {academicCredit}
                    onChange = {event =>setAcademicCredit(event.target.value)}
                />
            </div>
            <label className = "label">Calendar Reference</label>
            <div className = "field">
                <input
                    className = "input is-small"
                    name = "calendarReference"
                    placeholder = "Calendar Reference"
                    value = {calendarReference}
                    onChange = {event =>setCalendarReference(event.target.value)}
                />
            </div>
        </div> 
    );
}