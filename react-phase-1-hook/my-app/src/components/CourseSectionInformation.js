import React, {useState} from "react";
import "bulma/css/bulma.css";

function CourseSectionInformation(){
    const [data, setData ] = React.useState([
        {category: "Lecture", sections: 2 , hours: 3 , students: "lt5"},
        {category: "Tutorial", sections: 2 , hours: 3 , students: "gt50"},
        {category: "Lab", sections: 2 , hours: 3 , students: "20-50"}
    ]);

    const header = ["   ","Number of Sections","Hours Per Week","Number of Students Per Supervisor"];


    const changeRow = (e, i) => {
        const newData = [...data];
        let temp = e.target.name;
        if ( temp === "sections"){
            newData[i].sections =  e.target.value;
        }else if (temp === "hours"){
            newData[i].hours = e.target.value;
        }else{
            newData[i].students = e.target.value;
        }
        
        
        setData(newData);
    }
    return(
        <div>
            <p>
                Ensure that the number of sections and hours per week are updated.
                You my leave the "Number of Students Per Advisor" column for lecture blank.
            </p>
            <label class = "label">
                Laboratory Experience
            </label>

        <table
        class = "table is-bordered">
            <thead>
                {header.map((head,i) => {
                    return(
                        <td key = {i}>
                            {head}
                        </td>
                    )
                })}
            </thead>
            <tbody>

                {data.map((row, i)=>{
                    return(
                        <tr key = {i}>
                            <td>
                                {row.category}
                            </td>
                            <td>
                            <div class = "control">
                                <input
                                class = "input is-small"
                                name = "sections"
                                value ={row.sections}
                                onChange = {e => changeRow(e,i)}
                                />
                                </div>
                            </td>
                            <td>
                            <div class = "control">
                                <input
                                class = "input is-small"
                                name = "hours"
                                value ={row.hours}
                                onChange = {e => changeRow(e,i)}
                                />
                            </div>   
                            </td>
                            <td>
                            <div class ="control">
                            <div class ="select is-small">
                                <select name ="students"
                                value = {data[i].students}
                                onChange = {e => changeRow(e,i)}>
                                    <option value="">  </option>
                                    <option value="lt5"> {'<'} 5 </option>
                                    <option value="5-10">5-10 </option>
                                    <option value="10-20">10-20</option>
                                    <option value="20-50">20-50</option>
                                    <option value="gt50"> {'>'} 50 </option>
                                </select>
                                </div>
                            </div>
                              
                            </td>
                        </tr>
                    )

                })}
                
    
            </tbody>
        </table>
        </div>
    );


}

export default CourseSectionInformation;