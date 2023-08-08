import React, { createContext, useState } from "react";
import { MyCart } from "./components/contextApis/DynamicContext/Cart/MyCart";
import { Product } from "./components/contextApis/DynamicContext/Product/Product";
import { ProductList } from "./components/contextApis/DynamicContext/Product/ProductList";
import { MovieList } from "./components/contextApis/CustomProvider/MovieList";
import { GameList } from "./components/contextApis/CustomProvider/GameList";
import { EnterTainmentProvider } from "./components/contextApis/CustomProvider/context/EnterTainmentProvider";
import { TvList } from "./components/contextApis/CustomProvider/TvList";

export const PriceContext = createContext();

// export const EntertainmentContext = createContext();

export const AppV2 = () => {
  // let total = 1200
  // const sendPrice = (price) => {
  //   console.log("price in APPV2", price);
  //   total = price
  //   console.log('total', total);
  // };
  const [total, sendPrice] = useState(0);
  console.log('App v2 rendering');
  return (
    <>
      <h2>Stark Shopping App</h2>
      <main style={{ display: "flex", justifyContent: "space-evenly" }}>
        <PriceContext.Provider value={{sendPrice, total}}>
          <ProductList />
          <MyCart/>
        </PriceContext.Provider>

        {/* <EntertainmentContext.Provider
          value={{ type: "Movie", offering: ["Horror", "Comedy", "Thriller"] }}
        >
          <MovieList />
        </EntertainmentContext.Provider> */}

        {/* <EntertainmentContext.Provider
          value={{ type: "Sports", offering: ["Cricket", "Football", "Hockey"] }}
        >
          <GameList />
        </EntertainmentContext.Provider> */}

        {/* <EnterTainmentProvider
          val={{
            type: "Movie",
            offering: ["Horror", "Comedy", "Thriller", "Suspense"],
          }}
        >
          <MovieList />
        </EnterTainmentProvider>

        <EnterTainmentProvider
          val={{ type: "Sports", offering: ["Cricket", "Football", "Hockey"] }}
        >
          <GameList />
          <TvList/>
        </EnterTainmentProvider>

        <TvList/> */}
      </main>
    </>
  );
};
