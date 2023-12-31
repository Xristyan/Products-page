import classes from "./filter.module.css";
import Input from "../../UI/input";
import { filtersActions } from "../../store/filterSlice";
import { useDispatch, useSelector } from "react-redux";
const brandInputs = ["Nike", "Adidas", "Puma"];
const BrandFilter = () => {
  const dispatch = useDispatch();
  const brandsFilter = useSelector((state) => state.filters.brandFilter);
  const showFilters = useSelector((state) => state.filters.showBrandsFilter);
  const showFilterHandler = () => {
    dispatch(filtersActions.showBrandsFilterHandler());
  };
  const inputChangeHandler = (e) => {
    dispatch(filtersActions.brandFilterHandler(e.target.value));
  };
  return (
    <section className={classes.filterSection}>
      <h2 onClick={showFilterHandler}>
        Brand:<span>{showFilters ? "▲" : "▼"}</span>
      </h2>

      <div
        style={{ display: !showFilters ? "none" : "" }}
        className={classes.filters}
      >
        {brandInputs.map((brandInput, i) => {
          return (
            <Input
              key={i + 1}
              onChange={inputChangeHandler}
              type={"checkbox"}
              title={brandInput}
              value={brandInput}
              checked={brandsFilter.includes(brandInput)}
            />
          );
        })}
      </div>
    </section>
  );
};
export default BrandFilter;
