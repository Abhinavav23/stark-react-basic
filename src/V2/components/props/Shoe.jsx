import { Seller } from "./Seller";

export function Shoe({
  brand,
  productName,
  inStock,
  price,
  sizes,
  seller: { name, rating },
}) {
  //   console.log("value of props is ", props);
  //   console.log(props.sizes.join(", "));

  //   const {
  //     brand,
  //     productName,
  //     inStock,
  //     price,
  //     sizes,
  //     seller: { name, rating },
  //   } = props;
  return (
    <section style={{border: '1px solid gray', padding: '10px', margin: '10px 40px'}}>
      <div>Brand: {brand}</div>
      <div>Product Name: {productName}</div>
      <div>InStock: {inStock ? "Available" : "Out of stock"}</div>
      <div>Price: {price}</div>
      <div>
        size:
        {sizes.map((size, i) => {
          return <span key={i}>{size} </span>;
        })}
      </div>
      <Seller name={name} rating={rating}/>
    </section>
  );
}

// Props --> props are nothing but argument/parameter passed to the function
//
