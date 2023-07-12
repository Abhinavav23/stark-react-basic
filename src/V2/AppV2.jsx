import { Header } from "./components/composition/Header";

export const AppV2 = () => {
  return (
    <main>
      <h3>Composition</h3>
      <Header color="green">
        <div>
          <label htmlFor="searchBar"></label>
          <input type="text" id="searchBar" placeholder="search here" />
          <button>search</button>
        </div>
      </Header>
      <br />
      <Header color="green">
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
      </Header>
    </main>
  );
};
