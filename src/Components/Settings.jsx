export default function Settings({
  start,
  sort,
  size,
  speed,
  changeSize,
  changeSpeed,
}) {
  return (
    <div id="settings">
      <li>
        <button onClick={start}>Start</button>
      </li>
      <li>
        <button onClick={sort}>Sort</button>
      </li>
      <li>
        <input
          type="range"
          id="size_slider"
          min="11"
          max="111"
          value={size}
          onChange={changeSize}
        />
      </li>
      <li>
        <input
          type="range"
          id="speed_slider"
          min="-111"
          max="1111"
          value={speed}
          onChange={changeSpeed}
        />
      </li>
    </div>
  );
}
