import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      
      var numObjectives = 7;
      this.state = { //state is by default an object
         objectives: [
            { id: 1, name: 'Have a deep understanding, and practical knowledge of object oriented analysis, design, and development.'},
            { id: 2, name: 'Design and develop software programs in Java.' },
            { id: 3, name: 'Define the concepts of object-oriented design, such as inheritance and polymorphism.'},
            { id: 4, name: 'Apply miscellaneous programming concepts in Java, such as cloning, generic types, multi-threading, event-based programming, etc.'},
            { id: 5, name: 'Design and develop client-server applications.'},
            { id: 6, name: 'Use databases to store and retrieve information.'},
            { id: 7, name: 'Use different design and development utilities and tools.'}
            
         ]
      }
   }

   renderInstructionHeader() {
     return <h5> Enter your course's learning outcomes below and resize the row heights as necessary to display all text. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes. </h5>
   }

   renderLearningHeader() {
     return <h5>At the end of this course, you will be able to:</h5>
   }

   renderTableHeader() {
    let header = Object.keys(this.state.objectives[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  renderTableData() {
      return this.state.objectives.map((objectives, index) => {
         const { id, name } = objectives //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
            </tr>
         )
      })
   }

   render() {
    return (
       <div>
          {this.renderInstructionHeader()}
          <h1 id='title'>2. Learning Objectives</h1>
          {this.renderLearningHeader()}
          <table id='objectives'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }




}

export default Table //exporting a component make it reusable and this is

