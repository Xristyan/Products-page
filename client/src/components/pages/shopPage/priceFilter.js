import classes from "./filter.module.css";
import Input from "../../UI/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/filterSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const inputPrices = [
  { range: { min: 0, max: 99 }, title: "Under 99.99$" },
  { range: { min: 99, max: 199 }, title: "99.99$ - 199.99$" },
  { range: { min: 199, max: 299 }, title: "199.99$ - 299.99$" },
  { range: { min: 299, max: Infinity }, title: "Over 299.99$" },
];
const PriceFilter = () => {
  const dispatch = useDispatch();
  const pricesFilter = useSelector((state) => state.filters.priceFilter);
  const showFilters = useSelector((state) => state.filters.showPricesFilter);
  const showFilterHandler = () => {
    dispatch(filtersActions.showPricesFilterHandler());
  };
  const inputChangeHandler = (e, range) => {
    dispatch(filtersActions.priceFilterHandler(range));
  };
  return (
    <section className={classes.filterSection}>
      <h2 onClick={showFilterHandler}>
        Price:<span>{showFilters ? "▲" : "▼"}</span>
      </h2>

      <div
        style={{ display: !showFilters ? "none" : "" }}
        className={classes.filters}
      >
        {inputPrices.map((inputPrice, i) => {
          return (
            <Input
              key={i + 1}
              onChange={(e) => {
                inputChangeHandler(e, inputPrice.range);
              }}
              type={"checkbox"}
              title={inputPrice.title}
              checked={
                pricesFilter.find((price) => {
                  return (
                    price.min === inputPrice.range.min &&
                    price.max === inputPrice.range.max
                  );
                })
                  ? true
                  : false
              }
            />
          );
        })}
      </div>
    </section>
  );
};
export default PriceFilter;
