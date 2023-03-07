import React from "react";
import {
  HomeCategoryBackgroundImage,
  HomeCategoryContainer,
  HomeCategoryItem,
} from "./homeCategory.style";

const HomeCategory = ({ title, item }) => {
  return (
    <HomeCategoryContainer to={title}>
      <HomeCategoryBackgroundImage src={item.imageUrl} />
      <HomeCategoryItem>{title}</HomeCategoryItem>
    </HomeCategoryContainer>
  );
};

export default HomeCategory;
