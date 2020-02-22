import React from "react";

export function Box(props) {
  const selectBox = () => {
    props.selectBox(props.row, props.col)
  };

  return (
    <div
      className={props.boxClass}
      id={props.id}
      onClick={selectBox}
    />
  );
}
