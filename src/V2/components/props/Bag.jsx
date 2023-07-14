import { Seller } from "./Seller";

export const Bag = ({brand, type, price, name, rating}) => {
    // console.log(brand, type, price);
    return(
        <section style={{border: '1px solid gray', padding: '10px', margin: '10px 40px'}}>
            <div>Brand: {brand}</div>
            <div>Type: {type}</div>
            <div>Price: {price}</div>
            <Seller name={name} rating={rating}/>
        </section>
    )
}

// function multiple(a,b){
//     let x = 554444; //states
//     return a*b+x
// }

// multiple(2,5); //props