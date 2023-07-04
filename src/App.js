import "./App.css";
import SearchBar from "./components/SearchBar";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Logo/>
      {/* <SearchBar></SearchBar> */}
      <SearchBar />
      <Footer/>
    </div>
  );
}

export default App;
