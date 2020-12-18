import React from "react";
import '../App.css';

export default class FinalGradeDetermination extends React.Component {

    state = {
        component: "",
        outcome: "",
        weight: "",
        rows: [],

        new_note: "",
        notes: [],  
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    addComponent = () => {
        if (!this.state.component || !this.state.outcome || !this.state.weight)
            return;

        const new_row = {
            component: this.state.component,
            outcome: this.state.outcome,
            weight: this.state.weight
        }
        this.setState( {
            rows: [...this.state.rows, new_row],
            component: "",
            outcome: "",
            weight: ""
        });
    };

    removeComponent = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };

    addNote = () => {
        if (!this.state.new_note)
            return;
        
        this.setState( {
            notes: [...this.state.notes, this.state.new_note],
            new_note: ""
        });
    };

    removeNote = () => {
        this.setState( {
            notes: [...this.state.notes.slice(0,-1)]
        });
    };



    render() {
        const info = [
            {letterGrade: "A+", T: "   T >="},
            {letterGrade: "A",  T: "<= T < "},
            {letterGrade: "A-", T: "<= T < "},
            {letterGrade: "B+", T: "<= T < "},
            {letterGrade: "B",  T: "<= T < "},
            {letterGrade: "B-", T: "<= T < "},
            {letterGrade: "C+", T: "<= T < "},
            {letterGrade: "C",  T: "<= T < "},
            {letterGrade: "C-", T: "<= T < "},
            {letterGrade: "D+", T: "<= T < "},
            {letterGrade: "D",  T: "<= T < "},
            {letterGrade: "F",  T: "   T < "}
        ]

        return (
            <header className = "text"> 
                <h2> Final Grade Determination </h2>
                <div>The final grade in this course will be based on the following components:</div>

                <table>
                    <thead className = "tableHeader">
                        <th>Component</th>
                        <th>Learning Outcome(s) Evaluated</th>
                        <th>Weight</th>
                    </thead>
                    <tbody>
                        {this.state.rows.map(row => (
                            <tr>
                                <td>{row.component}</td>
                                <td>{row.outcome}</td>
                                <td>{row.weight}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>                    
                                <input
                                    name = "component"
                                    placeholder = "component"
                                    value = {this.state.component}
                                    onChange = {this.handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name = "outcome"
                                    placeholder = "outcome"
                                    value = {this.state.outcome}
                                    onChange = {this.handleChange}            
                                />
                            </td>
                            <td>
                                <input
                                    name = "weight"
                                    placeholder = "weight"
                                    value = {this.state.weight}
                                    onChange = {this.handleChange}                   
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick = {this.addComponent}>Add Grade Component</button>
                    <button onClick = {this.removeComponent}>Delete Grade Component</button>
                </div>


                <div> </div>
                <div>Notes</div>
                <div>
                    {this.state.notes.map(note => (
                        <div>{note}</div>
                    ))}
                </div>
                <textarea
                    name = "new_note"
                    value = {this.state.new_note}
                    onChange = {this.handleChange}
                />
                <div>
                    <button onClick = {this.addNote}>Add Note</button>
                    <button onClick = {this.removeNote}>Delete Note</button>
                </div>

                <div> </div>
                <table>
                    <thead className = "tableHeader">
                        <th>Letter Grade</th>
                        <th>Total Mark (T)</th>
                    </thead>
                    <tbody>
                        {info.map(row => (
                            <tr>
                                <td>{row.letterGrade}</td>
                                <td>
                                    <td>
                                        <input></input>
                                    </td>
                                    <td>
                                        <pre>{row.T}</pre>
                                    </td>
                                    <td>
                                        <input></input>
                                    </td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </header>
        );
    }
}
