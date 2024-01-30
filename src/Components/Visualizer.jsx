import { useEffect, useState } from "react";
import Bar from "./Bar";

export default function Visualizer({ array, currentIndices }) {
  return (
    <div id="visualizer">
      {array.map((value, index) => (
        <Bar
          key={index}
          height={(value * 100).toFixed(0)}
          highlight={currentIndices.includes(index)}
        />
      ))}
    </div>
  );
}
