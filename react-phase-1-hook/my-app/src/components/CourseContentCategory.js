import React, {useState} from "react";
import "bulma/css/bulma.css";

function CourseContentCategory(){
    const [data, setData] = React.useState([
        {category: "Math", element1 : "", element2: "", AU: 5},
        {category: "NaturalScience", element1 : "", element2: "", AU: 20},
        {category: "ComplementaryStudies", element1 : "", element2: "", AU: 20},
        {category: "EngineeringScience", element1 : "", element2: "", AU: 20},
        {category: "EngineeringDesign", element1 : "", element2: "", AU: 20},
    ]);
    
    
        
    const sumData = () =>{
        let total = Number(0);
    for (var i = 0; i<data.length;i++){
        total+=Number(data[i].AU);
        }
    return total;
    };

    const handleAUChange = (i, event) => {
        const newData = [...data];
        let temp = Number(sumData()-data[i].AU);
        if( Number(temp)+Number(event.target.value) < Number(101)){
            newData[i].AU = event.target.value;
        }else{
            alert("Number is too large")
        }
        setData(newData);
        };

    const handleChange2 = (category, e) =>{
        const newData = [...data];
        let temp = newData.find(row=> row.category === category);

        if (e.target.name === "element1"){
            temp.element1 = e.target.value;
        }else{
            temp.element2 = e.target.value;
        }
        setData(newData);
    };

    const handleChange = (myCategory, e) =>{
        const newData = [...data];
        for(var i = 0; i < newData.length; i++){
            if (newData[i].category === myCategory){
                if (e.target.name === "element1"){
                    newData[i].element1 = e.target.value;
                }else{
                    newData[i].element2 = e.target.value;
                }
            }
        }
        setData(newData);
    };



    return(
        <div name = "CourseContent">
         <div name = "header1"> 
            <label class = "label">
                Course Content Categories
            </label>
            <p>
                The following table displays the course content  categories and their AU (Accreditatoin Unit) percentages
            </p>
        
            <table
             class = "table is-bordered"
             name = "container">

            
            <table 
            class = "table is-bordered"
            className="CourseContentTable">
          
              <thead>
                <tr>
                <td>Course Content Category</td>
                <td>Content Element</td>
                <td>Content Element</td>
                <td>AU%</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Math</td>
                    <td>
                        <div class ="control">
                            <div class ="select is-small">
                            <select value = {data[0].element1} name="element1" onChange = {e => handleChange("Math",e)}>
                            <option value="blank"></option>
                            <option value="DiffCalcs">DiffCalcs</option>
                            <option value="DiffEq">DiffEq</option>
                            <option value="Discrete">Discrete</option>
                            <option value="IntCalc">IntCalc</option>
                            <option value="LinAlg">LinAlg</option>
                            <option value="NMeths">NMeths</option>
                            <option value="Prob">Prob</option>
                            <option value="Stat">Stat</option>
                        </select>

                            </div>
                        </div>
                        
                    </td>
                    <td>
                        <div class ="control">
                            <div class ="select is-small">
                        <select value = {data[0].elemen2} name="element2" onChange = {e => handleChange("Math",e)}>
                        <option value="blank"></option>
                        <option value="DiffCalcs">DiffCalcs</option>
                        <option value="DiffEq">DiffEq</option>
                        <option value="Discrete">Discrete</option>
                        <option value="IntCalc">IntCalc</option>
                        <option value="LinAlg">LinAlg</option>
                        <option value="NMeths">NMeths</option>
                        <option value="Prob">Prob</option>
                        <option value="Stat">Stat</option>
                        </select>
                            </div>
                        </div>
                    </td>
                    <td>
                    <div class = "control">
                    <input
                    class = "input is-small"
                    type="number"
                    value = {data[0].AU}
                    onChange = {e =>handleAUChange(0, e)}
                    />
                    </div>
                     </td>


                </tr>
                <tr>
                    <td>Natural Science</td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                            
                        <select value = {data[1].element1} name="element1" onChange = {e => handleChange("NaturalScience",e)}>
                        <option value="blank"></option>
                        <option value="Chem">Chem</option>
                        <option value="Earth">Earth</option>
                        <option value="Life">Life</option>
                        <option value="Phys">Phys</option>
                        </select>

                        </div>
                    </div>
                    </td>
                    <td>

                    <div class ="control">
                            <div class ="select is-small">
                            
                        <select value = {data[1].element2} name="element2" onChange = {e => handleChange("NaturalScience",e)}>
                        <option value="blank"></option>
                        <option value="Chem">Chem</option>
                        <option value="Earth">Earth</option>
                        <option value="Life">Life</option>
                        <option value="Phys">Phys</option>
                        </select>

                        </div>
                    </div>
                    </td>
                    <td>
                    <div class = "control">
                    <input
                    class = "input is-small"
                    type="number"
                    value = {data[1].AU}
                    onChange = {e =>handleAUChange(1, e)}
                    />
                    </div>
                     </td>
                </tr>
                <tr>
                    <td>Complementary Studies</td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                            
                    <select value = {data[2].element1} name="element1" onChange = {e => handleChange("ComplementaryStudies",e)}>
                        <option value="blank"></option>
                        <option value="A1">EngEcon</option>
                        <option value="A2">EnvSust</option>
                        <option value="A3">HS</option>
                        <option value="A4">HumSS</option>
                        <option value="A5">Impacts</option>
                        <option value="A6">OWComm</option>
                        <option value="A7">PEthics</option>
                    </select>
                            </div>
                        </div>
                    </td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                    <select value = {data[2].element2} name="element2" onChange = {e => handleChange("ComplementaryStudies",e)}>
                        <option value="blank"></option>
                        <option value="A1">EngEcon</option>
                        <option value="A2">EnvSust</option>
                        <option value="A3">HS</option>
                        <option value="A4">HumSS</option>
                        <option value="A5">Impacts</option>
                        <option value="A6">OWComm</option>
                        <option value="A7">PEthics</option>
                        
                    </select>
                    </div>
                    </div>
                    
                    </td>
                    <td>
                    <div class = "control">
                    <input
                    type="number"
                    class = "input is-small"
                    value = {data[2].AU}
                    onChange = {e =>handleAUChange(2, e)}
                    />
                    </div>
                     </td>
                </tr>
                <tr>
                    <td>Engineering Science</td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                            
                    <select value = {data[3].element1} name="element1" onChange = {e => handleChange("EngineeringScience",e)}>
                        
                        <option value="marked">X</option>
                    </select>
                    </div>
                        </div>
                    </td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                    <select value = {data[3].element2} name="element2" onChange = {e => handleChange("EngineeringScience",e)}>
                        
                        <option value="marked">X</option>
                    </select>
                    </div>
                        </div>
                    </td>
                    <td>
                    <div class = "control">
                    <input
                    class = "input is-small"
                    type="number"
                    value = {data[3].AU}
                    onChange = {e =>handleAUChange(3, e)}
                    />
                    </div>
                     </td>
                </tr>
                <tr>
                    <td>Engineering Design</td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                           
                    <select value = {data[4].element1} name="element1" onChange = {e => handleChange("EngineeringDesign",e)}>
                        
                        <option value="marked">X</option>
                    </select>
                    </div>
                    </div>
                    </td>
                    <td>
                    <div class ="control">
                            <div class ="select is-small">
                            
                    <select value = {data[4].element2} name="element2" onChange = {e => handleChange("EngineeringDesign",e)}>
                        
                        <option value="marked">X</option>
                    </select>
                    </div>
                        </div>
                    </td>
                    <td>
                    <div class = "control">
                    <input
                    type="number"
                    class = "input is-small"
                    value = {data[4].AU}
                    onChange = {e =>handleAUChange(4, e)}
                    />
                    </div>
                     </td>
                </tr>
              </tbody>
            </table>
         
            </table>
            <p>
                * At least one element must be selected for categories that Identify AUs
            </p>
            </div>
            </div>
    );
}

export default CourseContentCategory;