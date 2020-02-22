import React from "react";

export function Box(props) {
  return (
    <div
      className={props.boxClass}
      id={props.id}
      onClick={props.selectBox}
    ></div>
  );
}
