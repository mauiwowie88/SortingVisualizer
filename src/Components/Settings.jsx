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
      <button className="sliderBtn">
        Size: <span>{size}</span>
      </button>
      <input
        type="range"
        id="size_slider"
        min="11"
        max="111"
        value={size}
        onChange={changeSize}
      />
      <button className="sliderBtn">
        Speed: <span>{speed}</span>
      </button>
      <input
        type="range"
        id="speed_slider"
        min="-111"
        max="1111"
        value={speed}
        onChange={changeSpeed}
      />
    </div>
  );
}
