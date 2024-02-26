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
      <button onClick={start}>Start</button>

      <button onClick={sort}>Sort</button>

      <input
        type="range"
        className="slider"
        min="11"
        max="111"
        value={size}
        onChange={changeSize}
      />

      <input
        type="range"
        className="slider"
        min="-111"
        max="1111"
        value={speed}
        onChange={changeSpeed}
      />
    </div>
  );
}
