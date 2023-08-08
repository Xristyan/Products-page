import classes from "./input.module.css";

const Input = (props) => {
  return (
    <label className={classes.container}>
      <input
        checked={props.checked}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
      {props.isColor && (
        <span
          className={classes.colorCheckmark}
          style={{ backgroundColor: props.color }}
        ></span>
      )}
      {!props.isColor && <span className={classes.checkmark}></span>}

      {props.title}
    </label>
  );
};
export default Input;
