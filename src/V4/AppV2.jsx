import React, { createContext, useState } from "react";
import { MyCart } from "./components/contextApis/DynamicContext/Cart/MyCart";
import { Product } from "./components/contextApis/DynamicContext/Product/Product";
import { ProductList } from "./components/contextApis/DynamicContext/Product/ProductList";

export const PriceContext = createContext();

export const TotalPriceContext = createContext()

export const AppV2 = () => {
  // let total = 1200
  // const sendPrice = (price) => {
  //   console.log("price in APPV2", price);
  //   total = price
  //   console.log('total', total);
  // };
  const [total, sendPrice]  = useState(0);
  return (
    <>
      <h2>Stark Shopping App</h2>
      <main style={{ display: "flex", justifyContent: "space-evenly" }}>
        <PriceContext.Provider value={{sendPrice, total}}>
          <ProductList />
          <MyCart/>
        </PriceContext.Provider>
      </main>
    </>
  );
};
