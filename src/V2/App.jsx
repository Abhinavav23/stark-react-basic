import { ProductList } from "./components/ProductList";
import { ConditionalEX2 } from "./components/conditionals/ConditionalEX2";
import { UserStatus } from "./components/conditionals/UserStatus";
import { Shoe } from "./components/props/Shoe";
export const App = () => {
  return (
    <>
      <h3>Stark App V2</h3>
      {/* {/* <UserStatus/> */}
      {/* <UserStatus/> */}
      {/* <ProductList/> */}
      <ConditionalEX2/>
      <br />
      <br />
      <Shoe
        brand={"Nike"}
        productName={"running shoe"}
        inStock={true}
        price={1500}
        sizes={[5, 8, 9]}
        seller={{name: 'shoes world', rating: 3}}
      />
      <br />
      <Shoe
        brand={"Rebbok"}
        productName={"formal shoe"}
        inStock={false}
        price={2500}
        sizes={[8, 9]}
        seller={{name: 'Solutions', rating: 5}}
      />
      <br />
      <Shoe
        brand={"Puma"}
        productName={"snikers shoe"}
        inStock={false}
        price={2200}
        sizes={[7, 8, 9, 10]}
        seller={{name: 'Variety Solutions', rating: 4}}
      />
    </>
  );
};
