import React from "react";

const Event_function = () => {
  function Handler() {
    // console.log("clicked");
    alert("clicked on function");
  }
  return (
    <div>
      <button onClick={Handler}>clickme</button>
    </div>
  );
};

export default Event_function;
