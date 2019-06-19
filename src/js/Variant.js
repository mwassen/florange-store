import React from "react";
import "../css/App.css";

function Variant(props) {
  function onSizeClick(e) {
    props.onVariantClick(props.data);
  }

  return (
    <div
      className={
        props.selected && props.data.title === props.selected.title
          ? "selected"
          : "size"
      }
      key={props.data.id}
      onClick={onSizeClick}
    >
      {props.data.title}
    </div>
  );
}

export default Variant;
