import React from "react";
import { useSearchParams } from "react-router-dom";

export const About = () => {
  let [search, setSearch] = useSearchParams();

  // const selectColor = (e) => {
  //   const { value } = e.target;
  //   console.log("search", search);
  //   // approach 1
  //   // const fabricValue = search.get("fabric");
  //   // console.log("fabricValue", fabricValue);
  //   // setSearch({ color: value, fabric: fabricValue });

  //   // approach 2
  //   search.set('color', value);
  //   setSearch(search);
  // };

  // const selectFabric = (e) => {
  //   const { value } = e.target;
  //   // console.log("fabric", value);
  //   // setSearch({ fabric: value });
  //   search.set('fabric', value);
  //   setSearch(search);
  // };

  // const selectPrice = (e) => {
  //   const { value } = e.target;
  //   // setSearch({maxPrice: value})
  //   search.set('maxPrice', value);
  //   setSearch(search);
  // };

  const setParams = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    search.set(name, value);
    setSearch(search);
  }

  const getFilter = () => {
    const chosenColor = search.get("color");
    console.log('chosenColor', chosenColor);
    search.forEach((el) => {
      console.log('value', el);
    })
    search.entries()
  }

  // let a = 'abhinab'
  // a = 1000
  // let name: String = 'abhinav'

  return (
    <section>
      <h2>Product</h2>
      <div>1</div>
      <div>2</div>
      <div>3</div>

      <label htmlFor="colors">select colors: </label>
      <select name="colors" id="colors" onChange={setParams}>
        <option value="black" disabled defaultValue selected>
          select one
        </option>
        <option value="black">black</option>
        <option value="green">green</option>
        <option value="white">white</option>
      </select>

      <br />
      <br />
      <label htmlFor="fabric">select fabric: </label>
      <select name="fabric" id="fabric" onChange={setParams}>
        <option value="black" disabled defaultValue selected>
          select one
        </option>
        <option value="cotton">cotton</option>
        <option value="woolen">woolen</option>
        <option value="silk">silk</option>
      </select>

      <br />
      <br />
      <label htmlFor="fabric">select MaxPrice: </label>
      <select name="maxPrice" id="fabric" onChange={setParams}>
        <option value="black" disabled defaultValue selected>
          select one
        </option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="5000">5000</option>
      </select>

      <br />
      <button onClick={getFilter}>getFilters</button>
    </section>
  );
};
