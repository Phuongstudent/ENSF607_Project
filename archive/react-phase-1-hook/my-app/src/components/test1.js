import React, {useState} from "react";

function test1(){
    const [data, setData] = React.useState([
        {category: "Math", element1 : "", element2: "", AU: 20},
        {category: "NaturalScience", element1 : "", element2: "", AU: 20},
        {category: "ComplementaryStudies", element1 : "", element2: "", AU: 20},
        {category: "EngineeringScience", element1 : "", element2: "", AU: 20},
        {category: "EngineeringDesign", element1 : "", element2: "", AU: 20},
    ]);
    
    const AUrows = () =>{

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

        
        
        return(
            data.map((row,i) => {

                return(
                <tr key={i}>
                    <td>
                    <input
                    type="number"
                    value = {row.AU}
                    onChange = {e =>handleAUChange(i, e)}
                    />
                     </td>
                </tr>
                )})
            
        );
    }
        

    

    const handleChange = (category, e) =>{
        const newData = [...data];
        let temp = newData.find(row=> row.category === category);

        if (e.target.name === "element1"){
            temp.element1 = e.target.value;
        }else{
            temp.element2 = e.target.value;
        }
        setData(newData);
    };


   

    return(
        <div name = "CourseContent">
         <div name = "header1"> 
            <h1>
                Course Content Categories
            </h1>
            <p>
                The following table displays the course content  categories and their AU (Accreditatoin Unit) percentages
            </p>
        
            <table name = "container">

            
            <table className="CourseContentTable">
          
              <thead>
                <tr>
                <td>Course Content Category</td>
                <td>Content Element</td>
                <td>Content Element</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Math</td>
                    <td>
                        <select name="element1" onChange = {e => handleChange("Math",e)}>
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
                    </td>
                    <td>
                        <select name="element2" onChange = {e => handleChange("Math",e)}>
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
                    </td>
                </tr>
                <tr>
                    <td>Natural Science</td>
                    <td>
                        <select name="element1" onChange = {e => handleChange("NaturalScience",e)}>
                        <option value="blank"></option>
                        <option value="Chem">Chem</option>
                        <option value="Earth">Earth</option>
                        <option value="Life">Life</option>
                        <option value="Phys">Phys</option>
                        </select>
                    </td>
                    <td>
                        <select name="element2" onChange = {e => handleChange("NaturalScience",e)}>
                        <option value="blank"></option>
                        <option value="Chem">Chem</option>
                        <option value="Earth">Earth</option>
                        <option value="Life">Life</option>
                        <option value="Phys">Phys</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Complementary Studies</td>
                    <td>
                    <select name="element1" onChange = {e => handleChange("ComplementaryStudies",e)}>
                        <option value="blank"></option>
                        <option value="A1">EngEcon</option>
                        <option value="A2">EnvSust</option>
                        <option value="A3">HS</option>
                        <option value="A4">HumSS</option>
                        <option value="A5">Impacts</option>
                        <option value="A6">OWComm</option>
                        <option value="A7">PEthics</option>
                    </select>
                    </td>
                    <td>
                    <select name="element2" onChange = {e => handleChange("ComplementaryStudies",e)}>
                        <option value="blank"></option>
                        <option value="A1">EngEcon</option>
                        <option value="A2">EnvSust</option>
                        <option value="A3">HS</option>
                        <option value="A4">HumSS</option>
                        <option value="A5">Impacts</option>
                        <option value="A6">OWComm</option>
                        <option value="A7">PEthics</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Engineering Science</td>
                    <td>
                    <select name="element1" onChange = {e => handleChange("EngineeringScience",e)}>
                        <option value="blank"></option>
                        <option value="marked">X</option>
                    </select>
                    </td>
                    <td>
                    <select name="element2" onChange = {e => handleChange("EngineeringScience",e)}>
                        <option value="blank"></option>
                        <option value="marked">X</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Engineering Design</td>
                    <td>
                    <select name="element1" onChange = {e => handleChange("EngineeringDesign",e)}>
                        <option value="blank"></option>
                        <option value="marked">X</option>
                    </select>
                    </td>
                    <td>
                    <select name="element2" onChange = {e => handleChange("EngineeringDesign",e)}>
                        <option value="blank"></option>
                        <option value="marked">X</option>
                    </select>
                    </td>
                </tr>
              </tbody>
            </table>
            <td>
          <thead>
                <tr>
                <td>AU %</td>
                </tr>
        </thead>
                <AUrows/>
                </td>
            </table>
            <p>
                * At least one element must be selected for categories that Identify AUs
            </p>
            </div>
            </div>
    );
}

export default test1;