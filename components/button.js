import colors from "./colors";

const Button = (props) => {
  const getBgColor = () => {
    if (props.main) {
      return colors.main;
    }
    if (props.primary) {
      return colors.primary;
    }
    if (props.disabled) {
      return colors.grey;
    }
    if (props.danger) {
      return colors.danger;
    }
    if (props.bg) {
      return props.bg;
    }
  };

  const styles = {
    backgroundColor: getBgColor(),
    height: props.height,
    borderRadius: props.br,
    width: props.width,
    margin: props.margin,
    marginTop: props.mt,
    marginBottom: props.mb,
    padding: props.pd,
    color: props.color,
    border: props.br ? "1px solid " + props.brColor : "0px solid " + props.bg,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    cursor: "pointer",
    fontSize: props.fontSize,
  };

  return (
    <button style={styles} onClick={props.onclick}>
      {props.title}
    </button>
  );
};

export default Button;
