import { Seller } from "./Seller";

export const Bag = ({brand, type, price, name, rating}) => {
    console.log(brand, type, price);
    return(
        <section style={{border: '1px solid gray', padding: '10px', margin: '10px 40px'}}>
            <div>Brand: {brand}</div>
            <div>Type: {type}</div>
            <div>Price: {price}</div>
            <Seller name={name} rating={rating}/>
        </section>
    )
}