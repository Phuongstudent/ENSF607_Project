import React from "react";

export default function CourseSectionInformation(props){
    const { courseSection, setCourseSection } = props

    const updateRow = event => {
        const tempRows = [...courseSection]
        tempRows[event.target.title][event.target.name] = event.target.value;
        setCourseSection(tempRows)
    }

    return(
        <div className = "container is-fluid">
            <h5 className = "title is-5">Course Section Information</h5>
            <div>Ensure that the number of sections and hours per week are updated.You my leave the "Number of Students Per Supervisor" column for lecture blank.</div>    
            <table className = "table is-fullwidth">
                <thead>
                    <tr>
                        <th></th>
                        <th>Number of Sections</th>
                        <th>Hours Per Week</th>
                        <th>Number of Students Per Supervisor</th>
                    </tr>
                </thead>
                <tbody>
                    {courseSection.map((row, index) => (
                        <tr key = {index}>
                            <td>{row.category}</td>
                            <td>
                                <input
                                    className = "input is-small"
                                    name = "sections"
                                    title = {index}
                                    value = {row.sections}
                                    onChange = {updateRow}
                                />
                            </td>
                            <td>
                                <input
                                    className = "input is-small"
                                    name = "hours"
                                    title = {index}
                                    value = {row.hours}
                                    onChange = {updateRow}
                                />  
                            </td>
                            <td>
                                <select className = "select is-small is-fullwidth" name ="students" value = {row.students} title = {index} onChange = {updateRow}>
                                    <option value="">  </option>
                                    <option value="lt5"> {'<'} 5 </option>
                                    <option value="5-10">5-10 </option>
                                    <option value="10-20">10-20</option>
                                    <option value="20-50">20-50</option>
                                    <option value="gt50"> {'>'} 50 </option>
                                </select>      
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
