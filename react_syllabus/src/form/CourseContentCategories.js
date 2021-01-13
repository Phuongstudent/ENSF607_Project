import React from "react";

export default function CourseContentCategory(props){ 
    const { courseCategory, setCourseCategory } = props

    const sumAU = (tempRows) =>{
        let total = Number(0);
        for (var i = 0; i<courseCategory.length;i++){
            total+=Number(courseCategory[i].AU);
        }
        return total;
    };

    const updateRow = event => {
        const tempRows = [...courseCategory];
        tempRows[event.target.title][event.target.name] = event.target.value;
        let total = sumAU(tempRows);

        if(tempRows[event.target.title][event.target.name].length<1){
            tempRows[event.target.title][event.target.name] = 0;
        }

        if(Number(total) > Number(100)){
            tempRows[event.target.title][event.target.name] = event.target.value - (total - 100);
        }

        setCourseCategory(tempRows);
    };

    return(
        <div className = "container is-fluid">
            <h5 className = "title is-5">Course Content Categories</h5>
            <div> The following table displays the course content categories and their AU (Accreditatoin Unit) percentages</div>  
            <table className = "table is-fullwidth">
                <thead>
                <tr>
                    <th>Course Content Category</th>
                    <th>Content Element</th>
                    <th>Content Element</th>
                    <th>AU%</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Math</td>
                        <td>
                            <select className = "select is-small is-fullwidth" value = {courseCategory[0].element1} name="element1" title = "0" onChange = {updateRow}>
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
                            <select className = "select is-small is-fullwidth" value = {courseCategory[0].element2} name="element2" title = "0" onChange = {updateRow}>
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
                            <input
                                className = "input is-small"
                                name = "AU"
                                type= "number"
                                title = "0"
                                min = "0"
                                value = {courseCategory[0].AU}
                                onChange = {updateRow}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Natural Science</td>
                        <td>
                            <select className = "select is-small is-fullwidth" value = {courseCategory[1].element1} name="element1" title = "1" onChange = {updateRow}>
                                <option value="blank"></option>
                                <option value="Chem">Chem</option>
                                <option value="Earth">Earth</option>
                                <option value="Life">Life</option>
                                <option value="Phys">Phys</option>
                            </select>
                        </td>
                        <td>
                            <select className = "select is-small is-fullwidth" value = {courseCategory[1].element2} name="element2" title = "1" onChange = {updateRow}>
                                <option value="blank"></option>
                                <option value="Chem">Chem</option>
                                <option value="Earth">Earth</option>
                                <option value="Life">Life</option>
                                <option value="Phys">Phys</option>
                            </select>
                        </td>
                        <td>
                            <input
                                className = "input is-small"
                                name = "AU"
                                type= "number"
                                title = "1"
                                min = "0"
                                value = {courseCategory[1].AU}
                                onChange = {updateRow}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Complementary Studies</td>
                        <td>  
                            <select className = "select is-small is-fullwidth" value = {courseCategory[2].element1} name="element1" title = "2" onChange = {updateRow}>
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
                            <select className = "select is-small is-fullwidth" value = {courseCategory[2].element2} name="element2" title = "2" onChange = {updateRow}>
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
                            <input
                                className = "input is-small"
                                name = "AU"
                                type= "number"
                                title = "2"
                                min = "0"
                                value = {courseCategory[2].AU}
                                onChange = {updateRow}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Engineering Science</td>
                        <td> 
                            <select className = "select is-small is-fullwidth" value = {courseCategory[3].element1} name="element1" title = "3" onChange = {updateRow}>
                                <option value="marked">X</option>
                            </select>
                        </td>
                        <td>
                            <select className = "select is-small is-fullwidth" value = {courseCategory[3].element2} name="element2" title = "3" onChange = {updateRow}>
                                <option value="marked">X</option>
                            </select>
                        </td>
                        <td>
                            <input
                                className = "input is-small"
                                name = "AU"
                                type= "number"
                                title = "3"
                                value = {courseCategory[3].AU}
                                onChange = {updateRow}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Engineering Design</td>
                        <td>            
                            <select className = "select is-small is-fullwidth" value = {courseCategory[4].element1} name="element1" title = "4" onChange = {updateRow}>
                                <option value="marked">X</option>
                            </select>
                        </td>
                        <td>              
                            <select className = "select is-small is-fullwidth" value = {courseCategory.element2} name="element2" title = "4" onChange = {updateRow}>
                                <option value="marked">X</option>
                            </select>
                        </td>
                        <td>
                            <input
                                className = "input is-small"
                                name = "AU"
                                type="number"
                                title = "4"
                                value = {courseCategory[4].AU}
                                onChange = {updateRow}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>* At least one element must be selected for categories that Identify AUs</div>    
        </div>
    );
}