import { ProductList } from "./components/ProductList";
import { ConditionalEX2 } from "./components/conditionals/ConditionalEX2";
import { UserStatus } from "./components/conditionals/UserStatus";
import { Bag } from "./components/props/Bag";
import { Mobile } from "./components/props/Mobile";
import { Shoe } from "./components/props/Shoe";
export const App = () => {
  const spec = {screen: '14cm', battery: '4000Mah', camera:"12px"}
  return (
    <>
      <h3>Stark App V2</h3>
      {/* {/* <UserStatus/> */}
      {/* <UserStatus/> */}
      {/* <ProductList/> */}
      {/* <ConditionalEX2/> */}
      <h3>Electronics</h3>
      <Mobile 
      brand={"Apple"} 
      modelName={"Iphone 14"} 
      price={75000} 
      // specification={spec}

      // screen={spec.screen}
      // battery={spec.battery}
      // camera={spec.camera}
      {...spec}
      />

      <br />
      <br />
      <h3>Shoes</h3>
      <Shoe
        brand={"Nike"}
        productName={"running shoe"}
        inStock={true}
        price={1500}
        sizes={[5, 8, 9]}
        seller={{ name: "shoes world", rating: 3 }}
      />
      <br />
      <Shoe
        brand={"Rebook"}
        productName={"formal shoe"}
        inStock={false}
        price={2500}
        sizes={[8, 9]}
        seller={{ name: "Solutions", rating: 5 }}
      />
      <br />
      <Shoe
        brand={"Puma"}
        productName={"snikers shoe"}
        inStock={false}
        price={2200}
        sizes={[7, 8, 9, 10]}
        seller={{ name: "Variety Solutions", rating: 4 }}
      />

      <h3>Bags</h3>
      <Bag
        brand={"American tourister"}
        price={1400}
        type={"shoulder bag"}
        name={"Bag world"}
        rating={4.5}
      />
    </>
  );
};
