import React, {useState} from "react";


function courseSectionRow(row){

    return(
        <tr>
            <td>
                {row.category}
            </td>
            <td>
            <input  name = "numSections"
                    type = "text"
                    value = {row.numSections}
                    onChange = {e=>handleChangeRow(e.target.value,row.category)}
                    />
            </td>
            <td>
            <input  name = "numSections"
                    type = "text"
                    value = {row.numSections}
                    onChange = {e=>handleChangeRow(e.target.value,row.category)}
                    />
            </td>
            <td>
            <input  name = "numSections"
                    type = "text"
                    value = {row.numSections}
                    onChange = {e=>handleChangeRow(e.target.value,row.category)}
                    />
            </td>
            
        </tr>
    );

}

function CourseSectionInformation(){
    const [data, setData] = React.useState([
        {category: "Lecture", numSections : "", numHours: "", numStudents: ""},
        {category: "Tutorial", numSections : "", numHours: "", numStudents: ""},
        {category: "Lab", numSections : "", numHours: "", numStudents: ""},
    ]);

    const handleChangeRow = (value,category) =>{
        const newData = [...data];
        newData[category].outcome = value; 
        setData(newData);
        console.log("Change row"+{value} );
    };


    return(
       <div>
           <table name = "CourseContentCategoryTable">
                <thead>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            Number of Sections
                        </td>
                        <td>
                            Hours Per Week
                        </td>
                        <td>
                            Number of Students Per Supervisor
                        </td>
                    </tr>
                </thead>
                <tbody>

                {data.map((row)=>(
                    <courseSectionRow
                    row={row}/>
                ))}

                </tbody>
           </table>
       </div>
    );
}


export default CourseSectionInformation;