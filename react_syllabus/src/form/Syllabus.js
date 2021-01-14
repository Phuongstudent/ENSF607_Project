import React, {useState, useEffect, useRef} from "react";

export default function SyllabusTable(props){
    const {syllabusArray, setPageIndex} = props

    const selectPage = (index) => {
        let temp = Number(syllabusArray[index].course_code);
        setPageIndex(temp);
    } 

    return (
        <div className = "container is-fluid">
            <h4 className = "title is-4">Syllabus Table</h4>
            <div>The following is a table of all existing Syllabus:</div>
            <table className = "table is-fullwidth">
                <thead>
                    <tr>

                    <th>Syllabus Number</th>
                    <th>Syllabus Name</th>
                    
                    </tr>
                </thead>
                <tbody>
                {syllabusArray.map( (syllabus,index) => (

                    <tr key = {index}>
                       
                        <td>
                            {index}
                        </td>
                        <td>
                            {syllabus.course_code}  
                        </td>
                        <td>
                    
                            <button className = "button is-success" onClick = {selectPage(index)} >Select</button>
                         
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>

        </div>


    );




}

