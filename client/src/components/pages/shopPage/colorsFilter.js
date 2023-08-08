import Input from "../../UI/input";
import classes from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/filterSlice";
const inputColors = ["black", "white", "red", "blue"];
const ColorsFilter = (props) => {
  const colorsFilter = useSelector((state) => state.filters.colorsFilter);
  const showFilters = useSelector((state) => state.filters.showColorsFilter);
  const dispatch = useDispatch();
  const showFilterHandler = () => {
    dispatch(filtersActions.showColorsFilterHandler());
  };
  const inputChangeHandler = (e) => {
    dispatch(filtersActions.colorsFilterHandler(e.target.value));
  };

  return (
    <section className={classes.filterSection}>
      <h2 onClick={showFilterHandler}>
        Color:<span>{showFilters ? "▲" : "▼"}</span>
      </h2>

      <div
        style={{ display: !showFilters ? "none" : "" }}
        className={classes.filters}
      >
        {inputColors.map((inputColor, i) => {
          return (
            <Input
              key={i + 1}
              onChange={inputChangeHandler}
              value={inputColor}
              type={"checkbox"}
              color={inputColor}
              title={inputColor}
              isColor={true}
              checked={colorsFilter.includes(inputColor)}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ColorsFilter;
