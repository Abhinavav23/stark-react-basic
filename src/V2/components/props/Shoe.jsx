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
    <section>
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
      <div>Seller: {name}</div>
      <div>Seller rating: {rating}</div>
    </section>
  );
}

// Props --> props are nothing but argument/parameter passed to the function
//
