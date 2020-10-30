import React from "react";
import Add from "./todoContextAPI/Add";
import List from "./todoContextAPI/List";
import Todo from "./todoContextAPI/Todo";
import { useState } from "./context";

function App() {
  const { toDos, completed } = useState();
  return (
    <div className="App">
      <Add />
      <List name="To do">
        {toDos.map((todo: any) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </List>

      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((todo: any) => (
          <Todo key={todo.id} id={todo.id} text={todo.id} isCompleted={true} />
        ))}
      </List>
    </div>
  );
}
export default App;
