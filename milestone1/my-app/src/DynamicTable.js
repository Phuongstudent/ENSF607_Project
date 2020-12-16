import React from 'react';

//https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs
//This class does something, its the first table you see in the react page. I think I need to re do it because it doesnt use hook and
//it doesnt look that nice.

export default class DynamicTable extends React.Component {


  constructor(props) {
    super(props);
    //var numObjectives = 0;
    //var learningObjective = {index:"", info:""};
    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;
    //numObjective=numObjectives+1;
    //learningObjective.setState.index(numObjectives);
    //learningObjective.setState.info(this.state.message)
    items.push(this.state.message);
    //items.push(learningObjective)

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

  handleItemDeleted(i) {
    var items = this.state.items;
    //numObjective=numObjectives-1;
    items.splice(i, 1);
    
    this.setState({
      items: items
    });
  }

  renderRows() {
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
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
       <h1>2.Learning Objective</h1>
       <h2>At the end of this course, you will be able to: </h2>

        <table className="">
          <thead>
            <tr>
              {/* <th>
                Item
              </th>
              <th>
                Actions
              </th> */}
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
          onClick={this.handleClick.bind(this)}
        >
          Add Learning Outcome
        </button>
        <button
          onClick={this.handleClick.bind(this)}
        >
          Delete Learning Outcome
        </button>
      </div>
    );
  }
}