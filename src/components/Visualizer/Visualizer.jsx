import React from "react";
import "./Visualizer.css";

const Visualizer = ({ array, theme }) => {
  const Bar = React.memo(({ height }) => {
    const style = { height: `${height}%` };
    return (
      <div style={style} className={`bar ${theme}`}>
        {height}
      </div>
    );
  });

  return (
    <div id="visualizer">
      {array.map((value, index) => (
        <Bar key={index} height={value} />
      ))}
    </div>
  );
};

export default Visualizer;
