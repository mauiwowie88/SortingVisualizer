import React from "react";

const Visualizer = ({ array }) => {
  return (
    <div id="visualizer">
      {array.map((value, index) => (
        <Bar key={index} height={value} />
      ))}
    </div>
  );
};

const Bar = React.memo(({ height }) => {
  const style = { height: `${height}%` };
  return (
    <div style={style} className="bar">
      {height}
    </div>
  );
});

export default Visualizer;
