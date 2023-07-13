import { Header } from "./components/composition/Header";
import "./AppV2.css";
import { Footer } from "./components/composition/Footer";
export const AppV2 = () => {
  return (
    <main>
      <Header theme={"dark"} device={"mobile"}logoDesign={'square'}>
        <div>
          <label htmlFor="searchBar"></label>
          <input type="text" id="searchBar" placeholder="search here" />
          <button>search</button>
        </div>
      </Header>

      <Header  device={"mobile"} logoDesign={"circular"}/>
      <Footer/>
      <br />


      {/* <Header theme={"dark"}  >
        <ul>
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#home">cart</a>
          </li>
          <li>
            <a href="#home">Login</a>
          </li>
        </ul>
      </Header> */}
    </main>
  );
};
