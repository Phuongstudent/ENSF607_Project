
import React from 'react';


export default class CourseInformation extends React.Component{
    state = {
        description: "",
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
          <div>
           <h1>1.Calendar Information</h1>
           <tr><textarea
                                name = "number"
                                value = {this.state.number}
                                onChange = {this.handleChange}
                            />
           </tr>
           <tr>
           <textarea
                                name = "number"
                                value = {this.state.number}
                                onChange = {this.handleChange}
                            /></tr>
           <header
                className = "text">
            
                <table>
                    <tr>
                        <td>Course Hours</td>
                        <td>
                            <input
                                name = "type"
                                value = {this.state.type}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Academic Credit:</td>
                        <td>
                            <input
                                name = "number"
                                value = {this.state.number}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Calendar Reference:</td>
                        <td>
                            <input
                                name = "safetyTaught"
                                value = {this.state.safetyTaught}
                                onChange = {this.handleChange}
                            />
                        </td>
                    </tr>
                  
                </table>

                <div>
                Enter your course's learning outcomes below and resize the row heights as necessary to display all text. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes.
                </div>
            </header> 
          
          </div>
        );
      }
}

