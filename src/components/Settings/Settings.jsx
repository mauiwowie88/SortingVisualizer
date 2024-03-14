import "./Settings.css";

export default function Settings({
  start,
  size,
  speed,
  changeSize,
  changeSpeed,
  theme,
}) {
  const renderSlider = (name, value, min, max, onChange) => {
    return (
      <div>
        <p className="slider">
          <span>{name}</span>
          <span>{value}</span>
        </p>
        <input
          type="range"
          className={`${name}-slider`}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  return (
    <div id="settings">
      <button className={`settings-btn ${theme}`} onClick={start}>
        Shuffle
      </button>

      <button className={`settings-btn ${theme}`}>Sort</button>

      {renderSlider("size", size, 11, 111, changeSize)}
      {renderSlider("speed", speed, -111, 1111, changeSpeed)}
    </div>
  );
}
