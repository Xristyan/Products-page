import classes from "./filter.module.css";
import ColorsFilter from "./colorsFilter";
import PriceFilter from "./priceFilter";
import BrandFilter from "./brandFilter";

const Filter = () => {
  return (
    <div className={classes.filterContainer}>
      <BrandFilter />
      <ColorsFilter />
      <PriceFilter />
    </div>
  );
};
export default Filter;
