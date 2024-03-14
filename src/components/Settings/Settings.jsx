import "./Settings.css";

export default function Settings({
  start,
  sort,
  size,
  speed,
  changeSize,
  changeSpeed,
  theme,
}) {
  return (
    <div id="settings">
      <button className={`settings-btn ${theme}`} onClick={start}>
        Start
      </button>

      <button className={`settings-btn ${theme}`} onClick={sort}>
        Sort
      </button>

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
