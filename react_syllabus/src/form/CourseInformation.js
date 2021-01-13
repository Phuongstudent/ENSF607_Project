import React, {useState, useEffect, useRef} from "react";

export default function CourseInformation(props) {
    const [courseCode, setCourseCode] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseHours, setCourseHours] = useState("");
    const [academicCredit, setAcademicCredit] = useState("");
    const [calendarReference, setCalendarReference] = useState("");
    
    useEffect(() => {       
        if (!props.data) {
            setCourseCode("")
            setCourseTitle("")
            setCourseDescription("")
            setCourseHours("")
            setAcademicCredit("")
            setCalendarReference("")
        }
        else {
            setCourseCode(props.data.course_code)
            setCourseTitle(props.data.course_title)
            setCourseDescription(props.data.course_description)
            setCourseHours(props.data.course_hours)
            setAcademicCredit(props.data.course_credit)
            setCalendarReference(props.data.course_reference)
        }
    }, [props.data])

    const afterFirstRender = useRef(false);
    const { saveFunction, saveIndex, saveFlag } = props
    useEffect(() => {
        if (!afterFirstRender.current) {
            afterFirstRender.current = true
        }
        else {
            saveFunction(saveIndex, {
                course_code: courseCode,
                course_title: courseTitle,
                course_description: courseDescription,
                course_hours: courseHours,
                course_credit: academicCredit,
                course_reference: calendarReference
            })
        }
    }, [saveFlag])

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