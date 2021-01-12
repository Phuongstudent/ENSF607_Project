import React, { useState, useEffect } from "react";

export default function FinalGradeMarks(props) {
    const [finalGradeText, setFinalGradeText] = useState("0 0 0 0 0 0 0 0 0 0 0".split(" "))
    
    useEffect(() => {       
        if (!props.data) {
            return
        }
        else {
            setFinalGradeText(props.data.grade_marks.split(" "))
        }
    }, [props.data])

    const updateRow = event => {
        const tempGrades = [...finalGradeText]
        tempGrades[event.target.title] = parseFloat(event.target.value)
        setFinalGradeText(tempGrades)
    }

    const sortRows = event => {
        const tempGrades = [...finalGradeText]
        tempGrades.sort((a,b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
        tempGrades.reverse()
        setFinalGradeText(tempGrades)
    }

    return (
        <div className = "container is-fluid">
            <h5 className = "title is-5">Final Grade Marks</h5>
            <table className = "table is-fullwidth">
                <thead>
                    <tr>
                        <th className = "has-text-centered">Letter Grade</th>
                        <th className = "has-text-centered" colSpan = "3">Total Mark (T)</th>
                    </tr>        
                </thead>
                <tbody className = "has-text-centered">
                    <tr>
                        <td>A+</td>
                        <td></td>
                        <td className = "preformatted">{"   T >="}</td>
                        <td><input title = "0" value = {finalGradeText[0]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td><input title = "1" value = {finalGradeText[1]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "0" value = {finalGradeText[0]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td><input title = "2" value = {finalGradeText[2]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "1" value = {finalGradeText[1]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td><input title = "3" value = {finalGradeText[3]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "2" value = {finalGradeText[2]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input title = "4" value = {finalGradeText[4]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "3" value = {finalGradeText[3]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td><input title = "5" value = {finalGradeText[5]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "4" value = {finalGradeText[4]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>C+</td>
                        <td><input title = "6" value = {finalGradeText[6]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "5" value = {finalGradeText[5]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input title = "7" value = {finalGradeText[7]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "6" value = {finalGradeText[6]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>C-</td>
                        <td><input title = "8" value = {finalGradeText[8]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "7" value = {finalGradeText[7]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>D+</td>
                        <td><input title = "9" value = {finalGradeText[9]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "8" value = {finalGradeText[8]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input title = "10" value = {finalGradeText[10]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                        <td className = "preformatted">{"<= T < "}</td>
                        <td><input title = "9" value = {finalGradeText[9]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                    <tr>
                        <td>F</td>
                        <td></td>
                        <td className = "preformatted">{"   T < "}</td>
                        <td><input title = "10" value = {finalGradeText[10]} onChange = {updateRow} type = "number" min = "0" max = "100"/></td>
                    </tr>
                </tbody>
            </table>
            <button className = "button is-small is-fullwidth is-active" onClick = {sortRows}>Sort Table</button>
        </div>
    )
}