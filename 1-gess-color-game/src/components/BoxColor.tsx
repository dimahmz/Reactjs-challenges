import "../assets/styles/BoxColor.css";

const divStyle = {
  width: "500px",
  height: "300px",
};

function BoxColor({ color }: { color: string }) {
  return (
    <div style={{ ...divStyle, backgroundColor: color }} className="box"></div>
  );
}

export default BoxColor;
