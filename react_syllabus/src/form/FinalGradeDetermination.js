import React, {useState, useEffect, useRef} from "react";

export default function FinalGradeDetermination(props) {
    const [gradeRows, setGradeRows] = useState([{component: " ", outcome: " ", weight: 0}])

    useEffect(() => {       
        if (!props.data) {
            setGradeRows([{component: " ", outcome: " ", weight: 0}])
        }
        else {
            let temp = props.data.grade_components.split("%outcome%")
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
    }, [props.data])

    const afterFirstRender = useRef(false);
    const { saveFunction, saveIndex, saveFlag } = props
    useEffect(() => {
        if (!afterFirstRender.current) {
            afterFirstRender.current = true
        }
        else {
            saveFunction(saveIndex, {
                data: "here"
            })
        }
    }, [saveFlag])

    const addRow = () => {
        setGradeRows([
            ...gradeRows,
            {
                component: " ",
                outcome: " ",
                weight: 0
            }
        ]);
    }

    const sumWeight = () =>{
        return gradeRows.reduce((sum, currentValue) => sum + parseFloat(currentValue.weight), 0)   
    }

    const updateRow = event => {
        const tempRows = [...gradeRows]
        tempRows[event.target.title][event.target.name] = event.target.value;
        let total = sumWeight();
        
        if(tempRows[event.target.title][event.target.name].length<1){
            tempRows[event.target.title][event.target.name] = 0;
        }
        if(event.target.name === "weight" && total > 100){
            tempRows[event.target.title][event.target.name] = event.target.value - (total - 100);
        }

        if(event.target.name === "weight" && event.target.value === "") {
            tempRows[event.target.title]["weight"] = 0
        }
        setGradeRows(tempRows)
    }

    const deleteRow = index => () => {
        const tempRows = [...gradeRows]
        tempRows.splice(index, 1)
        setGradeRows(tempRows)
    }

    return (
        <div className = "container is-fluid">
            <h4 className = "title is-4">Final Grade Determination</h4>
            <div>The final grade in this course will be based on the following components:</div>
            <table className = "table is-fullwidth">
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Learning Outcome(s) Evaluated</th>
                        <th>Weight</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gradeRows.map((row, index) => (
                        <tr key = {index}>
                            <td>
                                <input 
                                    className = "input is-small"
                                    name = "component"
                                    title = {index}
                                    value = {row.component}
                                    onChange = {updateRow}
                                />
                            </td>
                            <td>
                                <input 
                                    className = "input is-small"
                                    name = "outcome"
                                    title = {index}
                                    value = {row.outcome}
                                    onChange = {updateRow}
                                />
                            </td>
                            <td>
                                <input
                                    className = "input is-small"
                                    name = "weight"
                                    type = "number"
                                    min = "0"
                                    max = "100"
                                    title = {index}
                                    value = {row.weight}
                                    onChange = {updateRow}
                                />
                            </td>
                            <td>
                                <button className = "button is-small" onClick = {deleteRow(index)}>Remove</button>
                            </td>

                        </tr>   
                    ))}
                    <tr>
                        <td><button className = "button is-small is-fullwidth is-active"  onClick = {addRow}>Add Grade Component</button></td>
                        <td>Total:</td>
                        <td>{gradeRows.reduce((sum, currentValue) => sum + parseFloat(currentValue.weight), 0)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}