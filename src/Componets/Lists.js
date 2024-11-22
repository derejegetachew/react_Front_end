import React from "react";

function Lists() {
  const prog = ["c++", "jav", "pyton"];
  return (
    <div>
      {/* <h1>{prog[0]}</h1>
      <h1>{prog[1]}</h1>
      <h1>{prog[2]}</h1> */}
      {prog.map((name, index) => (
        <h1 key={index}>
          <li type="square">{name}</li>
        </h1>
      ))}
    </div>
  );
}

export default Lists;
