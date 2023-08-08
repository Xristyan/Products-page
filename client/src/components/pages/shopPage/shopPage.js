import Filter from "./filter";
import classes from "./shopPage.module.css";
import ProductCard from "./productCard";
import jsonData from "../../../items.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/filterSlice";
import ProductsHeader from "./productsHeader";
import { sortActions } from "../../store/sortSlice";
import useFilterAndSort from "../../../hooks/useFilterAndSort";
import Heading from "./homeHeading";
const initProductsDisplayd = 12;
const ShopPage = () => {
  const { peopleType, category } = useParams();
  const [showProducts, setShowProducts] = useState(initProductsDisplayd);
  const [currentShowProducts, setCurrentShowProducts] = useState(0);
  const [maxShowProducts, setMaxShowProducts] = useState(jsonData.length);
  const dispatch = useDispatch();
  const colorFilter = useSelector((state) => state.filters.colorsFilter);
  const priceFilter = useSelector((state) => state.filters.priceFilter);
  const brandFilter = useSelector((state) => state.filters.brandFilter);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const sortType = useSelector((state) => state.sort.sortType);
  const { filteredData, filterAndSort } = useFilterAndSort(
    peopleType,
    category
  );
  useEffect(() => {
    filterAndSort(peopleType, category, jsonData);
  }, [
    peopleType,
    category,
    colorFilter,
    priceFilter,
    brandFilter,
    sortType,
    filterAndSort,
  ]);
  useEffect(() => {
    setMaxShowProducts(filteredData.length);
    setCurrentShowProducts(filteredData.slice(0, showProducts).length);
  }, [filteredData, showProducts]);
  const loadMoreHandler = () => {
    setShowProducts((prev) => prev + 12);
  };
  useEffect(() => {
    dispatch(filtersActions.reset());
    dispatch(sortActions.reset());
    setShowProducts(initProductsDisplayd);
  }, [peopleType, category]);

  return (
    <>
      <Heading />
      <ProductsHeader
        currentProducts={currentShowProducts}
        maxProducts={maxShowProducts}
        page={peopleType}
        category={category}
      />
      {filteredData.length === 0 && (
        <h2 className={classes.emptyMessage}>No products found</h2>
      )}
      <section className={classes.shopContainer}>
        {screenWidth >= 1000 && <Filter />}
        <div className={classes.productsContainer}>
          {filteredData.slice(0, showProducts).map((item) => {
            return (
              <ProductCard
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                brand={item.brans}
                price={item.price}
                color={item.color}
                rating={item.rating}
                discount={item.discount}
                category={item.category}
                gender={item.gender}
              />
            );
          })}
        </div>
      </section>
      <button
        disabled={showProducts >= filteredData.length}
        onClick={loadMoreHandler}
        className={classes.loadBtn}
      >
        Load More
      </button>
    </>
  );
};
export default ShopPage;
