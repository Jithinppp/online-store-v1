import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { selectProducts } from "../../features/products/productsSlice";
import { CategoryContainer } from "./category.style";

const Category = () => {
  const { categoryName } = useParams();
  const products = useSelector(selectProducts);

  const [category] = products.filter(
    (product) => product.title === categoryName
  );

  return (
    <CategoryContainer>
      {category.items.map((item) => (
        <ProductCard productDetails={item} key={item.id} />
      ))}
    </CategoryContainer>
  );
};

export default Category;
