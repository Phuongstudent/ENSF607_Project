import React from 'react';
import '../App.css';

export default class CourseSectionInformation extends React.Component {

    state = {
        lectureSections: "",
        lectureHours: "",
        lectureStudentsPerSupervisor: "",
        tutorialSections: "",
        tutorialHours: "",
        tutorialStudentsPerSupervisor: "",
        labSections: "",
        labHours: "",
        labStudentsPerSupervisor: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    render() {
        return (
            <header className = "text">
                <h3>Course Section Information</h3>
                <chart>
                    <thead>
                        <td></td>
                        <td>Number of Sections</td>
                        <td>Hours Per Week</td>
                        <td>Number of Students Per Supverisor</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lecture</td>
                            <td>
                                <input 
                                    name = "lectureSections"
                                    value = {this.state.lectureSections}
                                    onChange = {this.handleChange}  
                                />
                            </td>
                            <td>
                                <input 
                                    name = "lectureHours"
                                    value = {this.state.lectureHours}
                                    onChange = {this.handleChange}                                  
                                />
                            </td>
                            <td>
                                <input 
                                    name = "lectureStudentsPerSupervisor"
                                    value = {this.state.lectureStudentsPerSupervisor}
                                    onChange = {this.handleChange}                                  
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tutorial</td>
                            <td>
                                <input 
                                    name = "tutorialSections"
                                    value = {this.state.tutorialSections}
                                    onChange = {this.handleChange}  
                                />
                            </td>
                            <td>
                                <input 
                                    name = "tutorialHours"
                                    value = {this.state.tutorialHours}
                                    onChange = {this.handleChange}                                  
                                />
                            </td>
                            <td>
                                <input 
                                    name = "tutorialStudentsPerSupervisor"
                                    value = {this.state.tutorialStudentsPerSupervisor}
                                    onChange = {this.handleChange}                                  
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Lab</td>
                            <td>
                                <input 
                                    name = "labSections"
                                    value = {this.state.labSections}
                                    onChange = {this.handleChange}  
                                />
                            </td>
                            <td>
                                <input 
                                    name = "labHours"
                                    value = {this.state.labHours}
                                    onChange = {this.handleChange}                                  
                                />
                            </td>
                            <td>
                                <input 
                                    name = "labStudentsPerSupervisor"
                                    value = {this.state.labStudentsPerSupervisor}
                                    onChange = {this.handleChange}                                  
                                />
                            </td>
                        </tr>
                    </tbody>
                </chart>
            </header>
        )
    }

}