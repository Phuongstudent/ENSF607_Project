import React, { useState } from "react";

export default function FinalGradeNotes() {
    const [gradeNotes, setGradeNotes] = useState([""])

    const addNote = event => {
        setGradeNotes([
            ...gradeNotes,
            ""
        ]);
    }

    const updateNote = event => {
        const tempNotes = [...gradeNotes]
        tempNotes[event.target.title] = event.target.value
        setGradeNotes(tempNotes)
    }

    const deleteNote = index => () => {
        const tempNotes = [...gradeNotes]
        tempNotes.splice(index,1)
        setGradeNotes(tempNotes)
    }

    return (
        <div className = "container is-fluid">
            <label className = "label">Notes</label>
            <table className = "table is-fullwidth">
                <tbody>
                    {gradeNotes.map((row, index) => (
                        <tr key = {index} className = "has-text-centered">    
                            <td className = "is-vcentered">{String.fromCharCode(97+index)})</td>     
                            <td>
                                <textarea
                                    className = "textarea"
                                    name = "new_note"
                                    title = {index}
                                    value = {row}
                                    onChange = {updateNote} 
                                />
                            </td>  
                            <td className = "is-vcentered"><button className = "button is-small" onClick = {deleteNote(index)}>Remove</button></td>                      
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className = "button is-small is-fullwidth is-active" onClick = {addNote}>Add Note</button>
            </div>
            
        </div>
    )
}