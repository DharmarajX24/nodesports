import React from "react";

function Tournament({ data }) {
  return (
    <div>
      <div>Tournament exists !!</div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}

export default Tournament;
