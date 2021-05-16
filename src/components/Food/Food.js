import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { productActions } from "../../_redux/product/_actions";

import { FoodSummary } from "./food-summary/FoodSummary";
import FoodCard from "./food-card/FoodCard";

function Food() {
  
  const { products } = useSelector(
    (state) => ({
      products: state.product.products,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getProducts.call());
  }, [dispatch]);

  return (
    <>
      <FoodSummary />
      <div className="row justify-content-center my-5">
        {products &&
          products.length > 0 &&
          products.map((food) => {
            return <FoodCard key={food.id} {...food} />;
          })}
      </div>
    </>
  );
}

export default Food;
