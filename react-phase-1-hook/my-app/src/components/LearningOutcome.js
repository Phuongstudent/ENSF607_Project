import React, {useState} from "react";
import "bulma/css/bulma.css";

function SectionHeader(){
    var sectionHead = "2. Learning Outcomes";
    var sectionDescription = "At the end of the course, you will be able to:";
    return(
        <div>
        <label class = "label">
            {sectionHead}
        </label>
        <p>
            {sectionDescription}
        </p>
        </div>
    );
}

function SectionHeader2(){
    var sectionDescription ="Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.";
    return(
        <div>
            <p>
                {sectionDescription}
            </p>
        </div>
    );
}

function GradTableDescription(){

    return(
        <div>
        <p>
            CEAB Graduate Attributes
        </p>
        <table 
        className="gradTable">
             <tbody>
                <tr>
                    <td>A1. A knowledge base for engineering</td>
                    <td>A7. Communication skills</td>
                </tr>
                <tr>
                    <td>A2. Problem analysis</td>
                    <td>A8. Professionalism</td>
                </tr>
                <tr>
                    <td>A3. Investigation</td>
                    <td>A9. Impact of engineering on society/environment</td>
                </tr>
                <tr>
                    <td>A4. Design</td>
                    <td>A10. Ethics and equity</td>
                </tr>
                <tr>
                    <td>A5. Use of engineering tools</td>
                    <td>A11. Economics and project management</td>
                </tr>
                <tr>
                    <td>A6. Individual and team work</td>
                    <td>A12. Life-long learning</td>
                </tr>
              </tbody>
        </table>
        </div>
        
    );
}

function LevelTableDescription(){
    return(
        <div>
            <p>
                *The level at which the learning outcome is addressed in this course:
            </p>
        <table className="levelTable">
            <tbody>
                <tr>
                    <td>I (Introduced)</td>
                    <td>Introductory Level</td>
                </tr>
                <tr>
                    <td>D (Developed)</td>
                    <td>Intermediate development level</td>
                </tr>
                <tr>
                    <td>A (Applied)</td>
                    <td>Advanced application level</td>
                </tr>
              </tbody>
        </table>

        </div>
    );
}



function LearningOutcome(){
    const [data, setData] = React.useState([
        {outcome : "outcome1"},
        {outcome : "outcome2"},
        {outcome : "outcome3"},
        {outcome : "outcome4"},
        {outcome : "outcome5"}
    ])

    const [data2, setData2] = React.useState([
        {grad: "A1", level: "A"},
        {grad: "A1", level: "A"},
        {grad: "A1", level: "A"},
        {grad: "A1", level: "A"},
        {grad: "A1", level: "A"}
    ])

    const addRow = value => {
        console.log("Adding row"+{value});
        const newData = [...data, {outcome: value} ];
        setData(newData);
        const newData2 = [...data2, {grad: "A1", level: "A"} ];
        setData2(newData2);
    }

    const changeRow = (value,index) =>{
        const newData = [...data];
        newData[index].outcome = value; 
        setData(newData);
        console.log("Change row"+{value} );
    }

    const removeRow = (index)=>{
        const newData = [...data];
        newData.splice(index,1);
        setData(newData);
        const newData2 = [...data2];
        newData2.splice(index,1);
        setData2(newData2);
      
        console.log("Remove row" +index);
    }

    const changeGrad = (e, index) => {
        const NewData2 = [...data2];
        NewData2[index].grad = e.target.value;
    };

    const changeLevel = (e, index) => {
        const NewData2 = [...data2];
        NewData2[index].level = e.target.value;
    };


    const handleAddRow = () => {
        addRow("new entry");
    };

    const handleChangeRow = (e,index) =>{
        changeRow(e.value,index);
    };

    const handleRemoveRow = (index) =>{
        removeRow(index);
    };

    return(
        <div>
        <SectionHeader/>
        <table
        class = "table is-bordered"
        className = "table1">
            {data.map((row,i)=>{
                return(
                <tr key = {i}>
                    <td>
                        {i+1}
                    </td>
                    <td>
                        <form>
                        <input
                        type = "text"
                        value = {row.outcome}
                        onChange = {e=>handleChangeRow(e,i)}
                        />
                        </form>
                    </td>
                    <td>
                        <button
                            class = "button is-small"
                            onClick = {e => handleRemoveRow(i)} >
                                X
                        </button>
                    </td>
                    
                </tr>
                )
            }
            )}
        </table>
        <div>
        <button onClick = {e => handleAddRow()}>
            Add Learning Outcome
        </button>
        <button onClick = {e => handleRemoveRow(data.length-1)}>
            Remove Learning Outcome
        </button>
        </div>
        <div>
            <SectionHeader2/>
        </div>
        <div>

        <table
        class = "table is-bordered"
        className = "table2">
            <thead>
                <tr>
                    <td>
                        Learning Outcome
                    </td>
                    <td>
                        Graduate Attribute
                    </td>
                    <td>
                        Instruction Level
                    </td>
                </tr>
            </thead>

            {data2.map((row,i)=>{
                return(
                <tr key = {i}>
                    <td>
                        {i+1}
                    </td>
                    <td>
                    <select name="grad" id="grad" onChange ={e=> changeGrad(e ,i)}>
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
                    <td>
                    <select name="level" id="level" onChange ={e=> changeLevel(e ,i)}>
                        <option value="A1">I(Introduction)</option>
                        <option value="A2">A(Applied)</option>
                        <option value="A3">D(Developed)</option>
                        </select>
        </td>
                    <td>
                        <button onClick = {e => handleRemoveRow(i)} >
                            X
                        </button>
                    </td>
                    
                </tr>
                )
            }
            )}
        </table>
        </div>
        <div>
        <button onClick = {e => handleAddRow()}>
            Add Row to Table
        </button>
        <button onClick = {e => handleRemoveRow(data.length-1)}>
            Delete Row From Table
        </button>
        </div>

        <div>
            <GradTableDescription/>
            <LevelTableDescription/>
        </div>

        </div>        
    );
        
}

export default LearningOutcome;