import React from "react";
import { HomeContainer } from "./home.style";
// import SHOP_DATA from "../../SHOP_DATA";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/products/productsSlice";

const Home = () => {
  const shopData = useSelector(selectProducts);
  return (
    <HomeContainer>
      {shopData.map((category, idx) => (
        <HomeCategory
          title={category.title}
          item={category.items[0]}
          key={idx}
        />
      ))}
    </HomeContainer>
  );
};

export default Home;
