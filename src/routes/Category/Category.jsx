import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/spinner/Spinner";
import {
  selectProducts,
  selectProductsStatus,
} from "../../features/products/productsSlice";
import { CategoryContainer } from "./category.style";

const Category = () => {
  const { categoryName } = useParams();
  const products = useSelector(selectProducts);
  const productsStatus = useSelector(selectProductsStatus);
  let filteredProducts = [];
  if (productsStatus === "success") {
    filteredProducts = products.filter(
      (prod) => prod.title === categoryName
    )[0];
  }
  return (
    <CategoryContainer>
      {!products ? (
        <Spinner />
      ) : (
        <>
          {filteredProducts?.items?.map((item) => (
            <ProductCard productDetails={item} key={item.name} />
          ))}
        </>
      )}
    </CategoryContainer>
  );
};

export default Category;
