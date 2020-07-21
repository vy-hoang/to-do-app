import React, { useState } from "react";

function ToDoItem(props) {
  const [active, setLine] = useState(false);
  const [change, setColor] = useState(false);

  function crossLine() {
    setLine(preValue => {
      return !preValue;
    });
  }

  function Hover() {
    setColor(true);
  }
  function Nonhover() {
    setColor(false);
  }
  return (
    <div
    // onClick={() => {
    //   props.onChecked(props.id);
    // }}
    >
      <li
        onClick={crossLine}
        style={{ textDecoration: active ? "line-through" : "none" }}
      >
        {props.text}
        <span
          onMouseOver={Hover}
          onMouseOut={Nonhover}
          style={{ color: change ? "red" : "black" }}
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <i class="fa fa-trash-o bin" />
        </span>
      </li>
    </div>
  );
}

export default ToDoItem;
