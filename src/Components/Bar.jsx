export default function Bar({ height, highlight }) {
  const style = {
    height: `${height}%`,
    backgroundColor: highlight ? "green" : "cyan",
    // other styling
  };
  return (
    <div style={style} className="bar">
      {style.height}
    </div>
  );
}
