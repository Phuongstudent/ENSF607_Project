import React from "react";

export default function LearningOutcomes(props){
    const { learningOutcomes, setLearningOutcomes } = props

    const addRow = () => {
        setLearningOutcomes([
            ...learningOutcomes,
            {
                outcome: " ",
                grad: "A1",
                level: "A"
            }
        ]);
    }

    const updateRow = event => {
        const tempLearningOutcomes = [...learningOutcomes]
        tempLearningOutcomes[event.target.title][event.target.name] = event.target.value;
        setLearningOutcomes(tempLearningOutcomes)
    }

    const deleteRow = index => () => {
        const tempLearningOutcomes = [...learningOutcomes]
        tempLearningOutcomes.splice(index, 1)
        setLearningOutcomes(tempLearningOutcomes)
    }

    return(
        <div className = "container is-fluid">
            <h4 className = "title is-4">Learning Outcomes</h4>
            <div>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools.</div>
            <div>At the end of the course, the student will be able to:</div>
            <table className = "table is-fullwidth">
                <thead>
                    <tr>
                        <th className = "has-text-centered" width = "1px">Learning Outcome</th>
                        <th className = "has-text-centered">Graduate Attribute</th>
                        <th className = "has-text-centered" width = "1px">Instruction Level</th>
                        <th width = "1px">{" "}</th>
                    </tr>
                </thead>
                {learningOutcomes.map((row,index) => (
                    <tbody key={index}>
                        <tr className = "has-text-centered">
                            <td className = "is-vcentered" rowSpan = "2">{index + 1}</td>
                            <td>        
                                <input
                                    className = "input is-small"
                                    name = "outcome"
                                    placeholder = "Outcome"
                                    title = {index}
                                    value = {row.outcome}
                                    onChange = {updateRow}
                                />
                            </td>
                            <td className = "is-vcentered" rowSpan = "2">             
                                <select className = "select is-small" value = {row.level} name= "level" title = {index} onChange ={updateRow}>
                                    <option value="I">I (Introduction)</option>
                                    <option value="A">A (Applied)</option>
                                    <option value="D">D (Developed)</option>
                                </select>
                            </td>
                            <td className = "is-vcentered" rowSpan = "2">
                                <button className = "button is-small" onClick = {deleteRow(index)}>Remove</button>
                            </td>
                        </tr>
                        <tr className = "has-text-centered">
                            <td>
                                <select className = "select is-small is-fullwidth" value = {row.grad} name="grad" title = {index} onChange = {updateRow}>
                                    <option value="A1">A1. A knowledge base for engineering</option>
                                    <option value="A2">A2. Problem analysis</option>
                                    <option value="A3">A3. Investigation</option>
                                    <option value="A4">A4. Design</option>
                                    <option value="A5">A5. Use of engineering tools</option>
                                    <option value="A6">A6. Individual and team work</option>
                                    <option value="A7">A7. Communication skills</option>
                                    <option value="A8">A8. Professionalism</option>
                                    <option value="A9">A9. Impact of engineering on society/environment</option>
                                    <option value="A10">A10. Ethics and equity</option>
                                    <option value="A11">A11. Economics and project management</option>
                                    <option value="A12">A12. Life-long learning</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>    
                ))}
            </table>
            <button className = "button is-small is-fullwidth is-active" onClick = {addRow}>Add Learning Outcome</button> 
        </div>        
    );      
}