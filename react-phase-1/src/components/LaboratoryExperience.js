import React from "react";
import '../App.css';

export default class LaboratoryExperience extends React.Component {


    state = {
        type: "",
        number: "",
        safetyTaught: "",
        safetyExamined: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    render() {
        return (
            <div
                className = "text">
                <h3> Laboratory Experience </h3>

                <div> Ignore this table if the course does not have a laboratory section. </div>
                <table>
                    <tr>
                        <td>Lab Type</td>
                        <td>
                            <input
                                name = "type"
                                value = {this.state.type}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Number of Labs</td>
                        <td>
                            <input
                                name = "number"
                                value = {this.state.number}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Lab Safety Taught?</td>
                        <td>
                            <input
                                name = "safetyTaught"
                                value = {this.state.safetyTaught}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Lab Safety Examiner</td>
                        <td>
                            <input
                                name = "safetyExamined"
                                value = {this.state.safetyExamined}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>  
                </table>

                <div>
                    * Number of Labs: Number of timetabled lab sessions students are required to attend.
                </div>
            </div> 
        );
    }
}