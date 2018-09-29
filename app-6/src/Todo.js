import React from "react";

function Todo(props) {
  let list = props.tasks.map((task, i) => <div key={i}>{task}</div>);
  return <div>{list}</div>;
}

export default Todo;
