import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/products/productsSlice";

// components
import { HomeContainer } from "./home.style";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const products = useSelector(selectProducts);

  return (
    <HomeContainer>
      {!products ? (
        <Spinner />
      ) : (
        <>
          {products?.map((category, idx) => (
            <HomeCategory
              title={category.title}
              item={category.items[0]}
              key={idx}
            />
          ))}
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
