import React from "react";

export default function LaboratoryExperience(props) {   
    const { 
        labType, setLabType,
        labNumber, setLabNumber,
        safetyTaught, setSafetyTaught,
        safetyExamined, setSafetyExamined
    } = props

    return (
        <div className = "container is-fluid">
            <h5 className = "title is-5"> Laboratory Experience </h5>
            <div> Ignore this table if the course does not have a laboratory section. </div>
            <table className = "table is-fullwidth">
                <tbody>
                <tr>
                    <td>Lab Type</td>
                        <td>
                            <select className = "select is-small is-fullwidth" value = {labType} onChange = {event => setLabType(event.target.value)}>
                                <option value="blank"></option>
                                <option value="Hands-on">Hands-on</option>
                                <option value="Simulation">Simulation</option>
                                <option value="Problem">Problem</option>
                                <option value="Demo">Demo</option>
                                <option value="Other">Other</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Number of Labs</td>
                        <td>
                            <input
                                className = "input is-small"
                                name = "labNumber"
                                placeholder = "Lab Number"
                                value = {labNumber}
                                onChange = {event => setLabNumber(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Lab Safety Taught?</td>
                        <td>
                            <input
                                className = "input is-small"
                                name = "safetyTaught"
                                placeholder = "Safety Taught"
                                value = {safetyTaught}
                                onChange = {event => setSafetyTaught(event.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Lab Safety Examined?</td>
                        <td>
                            <input
                                className = "input is-small"
                                name = "safetyExamined"
                                placeholder = "Safety Examined"
                                value = {safetyExamined}
                                onChange = {event => setSafetyExamined(event.target.value)}
                            />
                        </td>
                    </tr> 
                </tbody> 
            </table>
            <div>
                * Number of Labs: Number of timetabled lab sessions students are required to attend.
            </div>
        </div> 
    );
}