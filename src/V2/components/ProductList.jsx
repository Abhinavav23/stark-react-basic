import { products } from "../productData";
import './product.css'
export const ProductList = () => {
    
  return (
    <main className="Product-list">
      <h3>Our Products</h3>
      {products.map((product) => {
        const { name, category, brand, price, id } = product;
        return (
          <section key={id} className="product-container">
            {/* there is a scope for optimizations */}
            <div>
              Name: <span style={{ color: "blue" }}>{name}</span>
            </div>
            <div>
              Category:
              <span style={{ color: "green" }}>{category}</span>
            </div>
            <div>
              Brand: <span style={{ color: "green" }}>{brand}</span>
            </div>
            <div>
              Price: <span style={{ color: "green" }}>{price}</span>
            </div>
            <br />
            {/* {price > 10000 ? <div>Expensive</div> : null } */}
            {price > 10000 ? <div>Expensive</div> : <div>Cheap</div> }
            
            {/* {price > 10000 && <div>Expensive</div>} */}
            {}
          </section>
        );
      })}
    </main>
  );
};


// conditional rendering
// if else
// 

// if(){

// }

// if(){

// }

// if(){

// }else{

// }

// if(){

// }else if(){

// }else if{

// } else if(){

// }


// Switch statements

// switch(){
//     case: ''
//     break
// }
