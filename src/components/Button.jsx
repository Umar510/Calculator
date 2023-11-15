import "./Button.css";

const Button = ({ symbol, color, handleClick, value }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};
export default Button;