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
            <br>
            </br>
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
        <ol>
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
        </ol>
        </div>
        
    );
}

function LevelTableDescription(){
    return(
        <div>
            <p name ="is-small">
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
        {rowNumber: 1, outcome : "outcome1"},
        {rowNumber: 2, outcome : "outcome2"},
        {rowNumber: 3, outcome : "outcome3"},
        {rowNumber: 4, outcome : "outcome4"},
        {rowNumber: 5, outcome : "outcome5"}
    ])

    const [data2, setData2] = React.useState([
        {rowNumber : 1, grad: "A1", level: "A"},
        {rowNumber : 2, grad: "A1", level: "I"},
        {rowNumber : 3, grad: "A1", level: "D"},
        {rowNumber : 4, grad: "A1", level: "A"},
        {rowNumber : 5, grad: "A1", level: "A"}
    ])

    const addRow = value => {
        console.log("Adding row"+{value});
        const newData = [...data, {rowNumber: data.length+1, outcome: value} ];
        setData(newData);
        const newData2 = [...data2, {rowNumber: data.length+1, grad: "A1", level: "A"} ];
        setData2(newData2);
    }

    const changeRow = (event,index) =>{
        const newData = [...data];
        newData[index].outcome = event.target.value; 
        setData(newData);
        
    }

    const removeRow = (item)=>{
        const newData = data.filter( row => Number (row.rowNumber)!== Number(item.rowNumber));
        const newData2 = data2.filter( row => Number (row.rowNumber)!== Number(item.rowNumber));
  
        for(var i = 0; i<newData.length; i++ ){
            newData[i].rowNumber = i+1;
            newData2[i].rowNumber = i+1;
        }
        
        setData(newData);
        setData2(newData2);
        
    }

    const changeGrad = (e, index) => {
        const newData2 = [...data2];
        newData2[index].grad = e.target.value;
        setData2(newData2);
    };

    const changeLevel = (e, index) => {
        const newData2 = [...data2];
        newData2[index].level = e.target.value;
        setData2(newData2);
    };


    const handleAddRow = () => {
        addRow("new entry");
    };

    const handleChangeRow = (e,index) =>{
        changeRow(e,index);
    };

    const handleRemoveRow = (row) =>{
        removeRow(row);
    };

    const handleRemoveBottomRow = () =>{
        const newData = data.filter(row => row.rowNumber != data.length);
        const newData2 =data2.filter(row => row.rowNumber != data2.length);

        setData(newData);
        setData2(newData2);
    }

    return(
        <div>
        <SectionHeader/>
        <table
        class = "table is-bordered is-striped is-narrow is-hoverable"
        >
            {data.map((row,index)=>{
                return(
                <tr  id="addr" key={index}>
                    <td>
                    {row.rowNumber}
                    </td>
                    <td>
                    <div class ="control">
                            
                        <input
                        class ="input is-small"
                        type = "text"
                        value = {row.outcome}
                        onChange = {(e)=>handleChangeRow(e,index)}
                        />
                    </div>
                        
                    </td>
                    <td>
                        <button
                            class = "delete is-small"
                            onClick = {(e) => handleRemoveRow(row)} >
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
        <button onClick = {e =>handleRemoveBottomRow()}>
            Remove Learning Outcome
        </button>
        </div>
        <div>
            <SectionHeader2/>
        </div>
        <div>

        <br>
        </br>

        <table
        class = "table is-bordered is-striped is-narrow is-hoverable"
        >
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

            {data2.map((row,index)=>{
                return(
                <tr  id="addr2" key={index}>
                    <td>
                        {row.rowNumber}
                    </td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                            
                    <select value = {data2[index].grad} name="grad" id="grad" onChange ={e=> changeGrad(e ,index)}>
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
                        </div>
                        </div>
                    </td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                            
                    <select value = {data2[index].level} name="level" id="level" onChange ={e=> changeLevel(e ,index)}>
                        <option value="I">I(Introduction)</option>
                        <option value="A">A(Applied)</option>
                        <option value="D">D(Developed)</option>
                        </select>
                        </div>
                        </div>
                    </td>
                    <td>
                         <button
                            class = "delete is-small"
                            onClick = {e => handleRemoveRow(row)} >
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
        <button onClick = {e => handleRemoveBottomRow()}>
            Delete Row From Table
        </button> 
        </div>

        <div>
            <br>
            </br>
            <GradTableDescription/>
            <br>
            </br>
            <LevelTableDescription/>
        </div>


        </div>        
    );
        
}

export default LearningOutcome;