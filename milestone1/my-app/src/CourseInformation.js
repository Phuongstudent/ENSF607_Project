
import React from 'react';


export default class CourseInformation extends React.Component{
    render() {
        return (
          <div>
           <h1>1.Calendar Information</h1>
           <h2><text>ENSF 409: Principles of Software Development</text></h2>
           <h2><text left={0}>A survey of software design and development topics for Engineering students. Topics include: key features of an object-oriented programming language, especially inheritance and polymorphism; elements of object-oriented design; programming and application of common data structures; strategies and tools for testing and debugging.</text></h2>
           <h2>Course Hours: 3 units; H (3-2)</h2>
           <h2>Academic Credit: 3</h2>
           <h2>Calendar Reference: http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252</h2>
           <h2>Enter your course's learning outcomes below and resize the row heights as necessary to display all text. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes.</h2>
          </div>
        );
      }
}

