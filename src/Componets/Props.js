import React from "react";
const Fullname = (props) => {
  return (
    <div>
      <h1>
        {props.name} Getachew {props.age}
      </h1>
      {props.children}
    </div>
  );
};

export default Fullname;
