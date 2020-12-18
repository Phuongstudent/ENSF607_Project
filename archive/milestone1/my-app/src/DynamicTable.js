import React from 'react';
import './DynamicTable.css'

//https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs
//This class does something, its the first table you see in the react page. I think I need to re do it because it doesnt use hook and
//it doesnt look that nice.

export default class DynamicTable extends React.Component {


  constructor(props){
    super(props);
    this.state = {
        row: {learningOutcome: "", graduateAttribute: "",  introductionLevel: ""},
        rows:[],

        AUarray:[20,20,20,20,20],
        AU:0,

        message: "",
        items: []

    }    
}

//Here is for the first table for 2 Learning Outcome
handleClick() {
var items = this.state.items;
items.push(this.state.message);

this.setState({
    items: items,
    message: ""
    });
}

handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleAUChanged(i, event) {
    var AU = this.state.AU;
    AU[i]  = event.target.value;

    this.setState({
      AU: AU
    });
  }

  renderRowsFirstTable() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                     <td>{i+1}</td>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleRowDeleted.bind(context, i)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            });
  }

  renderRowsAU() {
    var context = this;

    return  this.state.AUarray.map(function(o, i) {
              return (
                <tr key={"AU-" + i}>
                     {/* <td>{i+1}</td> */}
                  <td>
                    <input
                      type="number"
                      pattern="[0-9]*"
                      value={o}
                      onChange={context.handleAUChange.bind(context, i)}
                    />
                  </td>
                  {/* <td>
                    <button
                      onClick={context.handleRowDeleted.bind(context, i)}
                    >
                      X
                    </button>
                  </td> */}
                </tr>
              );
            });
  }


//Here is for the second table for the 2 Learning Outcome
handleAddRow() {

    var rows = this.state.rows;
    rows.push(this.state.row);
    
    var items = this.state.items;
    items.push(this.state.message);

    this.setState({
        rows: rows,
        row: {learningOutcome: "", graduateAttribute: "",  introductionLevel: ""},
        
        items: items,
        message:""
        
    });
  }

handleLearningOutcomeChanged(i, event) {
var rows = this.state.rows;
rows[i].learningOutcome  = event.target.value;

this.setState({
    rows: rows
});
}


handleGraduateAttributeChanged(i, event) {
var rows = this.state.rows;
rows[i].graduateAttribute  = event.target.value;

this.setState({
    rows: rows
});
}


handleIntroductionLevelChanged(i, event) {
var rows = this.state.rows;
rows[i].introductionLevel  = event.target.value;

this.setState({
    rows: rows
});
}



handleAUChange(i, event) {
  var AUarray = this.state.AUarray;
  AUarray[i]  = event.target.value;
  


  
  // if( (sum+event.target.value) >100){
  //   AUarray[i]  = 0;
  // }else if{
  //   AUarray[i]  = event.target.value;
  // }

  



  
  
  this.setState({
    AUarray: AUarray
  });
  }



handleRowDeleted(i) {
var rows = this.state.rows;
rows.splice(i, 1);

var items = this.state.items;
items.splice(i, 1);


this.setState({
    rows: rows,
    
    items: items
});
}

handleBottomRowDeleted(i) {
var rows = this.state.rows;
rows.splice(rows.length-1, 1);

var items = this.state.items;
items.splice(rows.length-1, 1);


this.setState({
    rows: rows,
    
    items: items
});
}




renderTableHeader() {
let header = Object.keys(this.state.row)
return header.map((key, index) => {
   return <th key={index}>{key.toUpperCase()}</th>
})
}


renderRows() {
    var context = this;

    return  this.state.rows.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                     <td>{i+1}</td>
                  {/* <td>
                    <input
                      type="text"
                      value={o.learningOutcome}
                      onChange={context.handleLearningOutcomeChanged.bind(context, i)}
                    />
                  </td> */}
                  {/* <td>
                    <input
                      type="text"
                      value={o.graduateAttribute}
                      onChange={context.handleGraduateAttributeChanged.bind(context, i)}
                    />
                  </td> */}
                  {/* <td> 
                    <input
                      type="text"
                      value={o.introductionLevel}
                      onChange={context.handleIntroductionLevelChanged.bind(context, i)}
                    />
                  </td> */}

                <td>
                    <select name="grad" id="grad">
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
                </td>
                <td>
                    <select name="level" id="level">
                    <option value="A1">I(Introduction)</option>
                    <option value="A2">A(Applied)</option>
                    <option value="A3">D(Developed)</option>
                    </select>
                </td>

                <td>
                    <button
                      onClick={context.handleRowDeleted.bind(context, i)}
                    >
                      X
                    </button>
                </td>

                </tr>
              );
            });
  }

 
  //Showmebnu


  render() {
    return (
      <div>
       <h1>2.Learning Objective</h1>
       <h2>At the end of this course, you will be able to: </h2>

       <table className="table1">
          <thead>
            <tr>
            {/* {this.renderTableHeader()} */}
            </tr>
          </thead>
          <tbody>
            {this.renderRowsFirstTable()}
          </tbody>
        </table>
        <hr/>
        {/* <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        /> */}
        <button
          onClick={this.handleAddRow.bind(this)}
        >
          Adding Learning Outcome
        </button>
        <button
          onClick={this.handleBottomRowDeleted.bind(this)}
        >
          Delete Learning Outcome
        </button>

        <h2>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</h2>
        <h2>CEAB Graduate Attributes:</h2>

        <table className="table2">
          <thead>
            <tr>
            {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        {/* <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        /> */}
        <button
          onClick={this.handleAddRow.bind(this)}
        >
          Add Row to Table
        </button>
        <button
          onClick={this.handleBottomRowDeleted.bind(this)}
        >
          Delete Row From Table
        </button>

        
        <h2>CEAB Graduate Attributes</h2>

        <table className="table3">
          <thead>
            <tr>
            
            </tr>
          </thead>
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

        <h2>*The level at which the learning outcome is addressed in this course:</h2>

        <table className="table3">
          <thead>
            <tr>
            
            </tr>
          </thead>
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

        <h1>Course Content Categories</h1>
        <h1>The following table displays the course content categories and their AU (Accrediation Unit Percentages</h1>




        <table >
        <tr>
        <td>

        <table className="table4">
      
          <thead>
            <tr>
            <td>Course Content Category</td>
            <td>Content Element</td>
            <td>Content Element</td>
            {/* <td>AU %</td> */}
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Math</td>
                <td>
                    <select name="math1" id="math1">
                    <option value="blank"></option>
                    <option value="A1">DiffCalcs</option>
                    <option value="A2">DiffEq</option>
                    <option value="A3">Discrete</option>
                    <option value="A4">IntCalc</option>
                    <option value="A5">LinAlg</option>
                    <option value="A6">NMeths</option>
                    <option value="A7">Prob</option>
                    <option value="A8">Stat</option>
                    </select>
                </td>
                <td>
                    <select name="math2" id="math2">
                    <option value="blank"></option>
                    <option value="A1">DiffCalcs</option>
                    <option value="A2">DiffEq</option>
                    <option value="A3">Discrete</option>
                    <option value="A4">IntCalc</option>
                    <option value="A5">LinAlg</option>
                    <option value="A6">NMeths</option>
                    <option value="A7">Prob</option>
                    <option value="A8">Stat</option>
                    </select>
                </td>
                {/* <td>
                  <input></input>
                </td> */}
            </tr>
            <tr>
                <td>Natural Science</td>
                <td>
                    <select name="naturalScience1" id="naturalScience1">
                    <option value="blank"></option>
                    <option value="A1">Chem</option>
                    <option value="A2">Earth</option>
                    <option value="A3">Life</option>
                    <option value="A4">Phys</option>
                    </select>
                </td>
                <td>
                    <select name="naturalScience2" id="naturalScience2">
                    <option value="blank"></option>
                    <option value="A1">Chem</option>
                    <option value="A2">Earth</option>
                    <option value="A3">Life</option>
                    <option value="A4">Phys</option>
                    </select>
                </td>
                {/* <td>
                  <input></input>
                </td> */}
            </tr>
            <tr>
                <td>Complementary Studies</td>
                <td>
                <select name="complementaryStudies1" id="complementaryStudies1">
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
                <select name="complementaryStudies2" id="complementaryStudies2">
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
                {/* <td>
                  <input></input>
                </td> */}
            </tr>
            <tr>
                <td>Engineering Science</td>
                <td>
                <select name="engineeringScience1" id="engineeringScience1">
                    <option value="blank"></option>
                    <option value="marked">X</option>
                </select>
                </td>
                <td>
                <select name="engineeringScience2" id="engineeringScience2">
                    <option value="blank"></option>
                    <option value="marked">X</option>
                </select>
                </td>
                {/* <td>
                  <input></input>
                </td> */}
            </tr>
            <tr>
                <td>Engineering Design</td>
                <td>
                <select name="engineeringDesign1" id="engineeringDesign1">
                    <option value="blank"></option>
                    <option value="marked">X</option>
                </select>
                </td>
                <td>
                <select name="engineeringDesign2" id="engineeringDesign2">
                    <option value="blank"></option>
                    <option value="marked">X</option>
                </select>
                </td>
                {/* <td> 
                  <input>
                  </input>
                </td> */}
            </tr>
            
          </tbody>
        </table>
      </td>
      <td>
      <thead>
            <tr>
            <td>AU %</td>
            </tr>
        </thead>
      {this.renderRowsAU()}

      </td>
      </tr>
      </table>
      </div>
    );
  }
}