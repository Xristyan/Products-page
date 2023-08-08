import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useFilterAndSort = () => {
  const [filteredData, setFilteredData] = useState([]);
  const colorFilter = useSelector((state) => state.filters.colorsFilter);
  const priceFilter = useSelector((state) => state.filters.priceFilter);
  const brandFilter = useSelector((state) => state.filters.brandFilter);
  const sortType = useSelector((state) => state.sort.sortType);
  const filterAndSort = useCallback(
    function (peopleType, category, jsonData) {
      const data = jsonData.filter((item) => {
        const type = peopleType
          ? item.gender.toUpperCase() === peopleType.toUpperCase()
          : true;
        const categories = category
          ? item.category.toUpperCase() === category.toUpperCase()
          : true;
        const colors =
          colorFilter.length !== 0 ? colorFilter.includes(item.color) : true;

        const discountedPrice = +(
          item.price -
          item.price * (item.discount / 100)
        ).toFixed(2);

        const prices =
          priceFilter.length !== 0
            ? priceFilter.some(
                (filter) =>
                  discountedPrice > filter.min && discountedPrice < filter.max
              )
            : true;
        const brands =
          brandFilter.length !== 0 ? brandFilter.includes(item.brand) : true;

        return type && categories && colors && prices && brands;
      });
      if (sortType === "") {
        setFilteredData(data);
        return;
      }
      if (
        sortType.trim().split(" ").join("").toUpperCase() ===
        "alphabeticalA-Z".toUpperCase()
      ) {
        data.sort((a, b) => a.title.localeCompare(b.title));
        setFilteredData(data);
        return;
      }
      if (
        sortType.trim().split(" ").join("").toUpperCase() ===
        "alphabeticalZ-A".toUpperCase()
      ) {
        data.sort((a, b) => b.title.localeCompare(a.title));
        setFilteredData(data);
        return;
      }
      if (
        sortType.trim().split(" ").join("").toUpperCase() ===
        "priceAscending".toUpperCase()
      ) {
        data.sort(
          (a, b) =>
            a.price -
            a.price * (a.discount / 100) -
            (b.price - b.price * (b.discount / 100))
        );
        setFilteredData(data);
        return;
      }
      if (
        sortType.trim().split(" ").join("").toUpperCase() ===
        "priceDescending".toUpperCase()
      ) {
        data.sort(
          (a, b) =>
            b.price -
            b.price * (b.discount / 100) -
            (a.price - a.price * (a.discount / 100))
        );
        setFilteredData(data);
        return;
      }
    },
    [colorFilter, brandFilter, priceFilter, sortType]
  );
  return { filteredData, filterAndSort };
};
export default useFilterAndSort;
