import React from "react";
import "./App.css";

function Todo({ todo, index, changeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      //style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div>
        <td>
        {index+1}
        </td>
        <td>
          <input
              type="text"
              value={todo.text}
              onChange ={e=> changeTodo(e.target.value ,index)}
              />
        </td>
        <td>
        <button onClick={e => removeTodo(index)}>x</button>
        </td>
      </div>
    </div>
  );
}


function Todo2({ todo, index, changeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      //style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div>
        <td>
        {index+1}
        </td>
        <td>
        <select name="grad" id="grad" onChange ={e=> changeTodo(e ,index)}>
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
        <select name="level" id="level" onChange ={e=> changeTodo(e ,index)}>
                        <option value="A1">I(Introduction)</option>
                        <option value="A2">A(Applied)</option>
                        <option value="A3">D(Developed)</option>
                        </select>
        </td>
        <td>
        <button onClick={() => removeTodo(index)}>x</button>
        </td>
      </div>
    </div>
  );
}




function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );


}


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",

    },
    {
      text: "Meet friend for lunch",
      
    },
    {
      text: "Build really cool todo app",

    }
  ]);
  const [todos2, setTodos2] = React.useState([
    {
      graduateAttribute: "",
      instructionLevel: ""
    },
    {
      graduateAttribute: "",
      instructionLevel: ""
    },
    {
      graduateAttribute: "",
      instructionLevel: ""
    }
  ]);

  const changeTodo = (text,index) => {
    const newTodos = [...todos];
    newTodos[index]=text;
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    const newTodos2 =[...todos2, "A1" ];
    setTodos(newTodos);
    setTodos2(newTodos2);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    const newTodos2 = [...todos2];
    newTodos2.splice(index, 1);
    setTodos2(newTodos2);
  };

  const removeBottomTodo = () => {
    const newTodos=[...todos];
    newTodos.splice(todos.length-1,1);
    setTodos(newTodos);
    const newTodos2=[...todos2];
    newTodos2.splice(todos2.length-1,1);
    setTodos2(newTodos2);
  }

  const handleChange = (event, index) =>{
    const newTodos2 = [...todos2];
    newTodos2[index].graduateAttribute = event.target.grad;
    newTodos2[index].instructionLevel = event.target.level;
    setTodos2(newTodos2);
  }

  return (
    <div className="app">


      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} /> 
        
        <button onClick={() => addTodo("new entry")}>Add Learning Objective</button>
        <button onClick={() => removeBottomTodo()}>Remove Learning Objective</button>
      </div>


      <table className="todo-list2">
        <tr>
            <th>
              Learning Objective
            </th>
      
            <th>
              Graduate Attribute
            </th>
        
            <th>
              Instruction Level
            </th>

            <th>
              
            </th>
        </tr>
        <tbody>
        {todos2.map((todo2, index) => (
          <Todo2
            key={index}
            index={index}
            todo={todo2}
            changeTodo={handleChange}
            removeTodo={removeTodo}
          />
        ))}
        </tbody>
        {/* <TodoForm addTodo={addTodo} /> 
        <AddButton addTodo={addTodo} /> */}
        <button onClick={() => addTodo("")}>Add Learning Objective</button>
        <button onClick={() => removeBottomTodo()}>Remove Learning Objective</button>
      </table>



    </div>
  );
}

export default App;