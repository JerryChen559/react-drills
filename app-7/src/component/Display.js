import React from "react";

function Display(props) {
  let list = props.list.map((elem, i) => <div key={i}>{elem}</div>);

  return <div>{list}</div>;
}

export default Display;
