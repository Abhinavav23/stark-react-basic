import "./App.css";
import SearchBar from "./components/SearchBar";
import { Logo } from "./components/Logo";
import { PersonList } from "./components/PersonList";
import Person from "./components/ClassCompEx/Person";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Logo/>
      {/* <SearchBar></SearchBar> */}
      <SearchBar />
      {/* <PersonList/> */}
      <Person/>
      <Footer/>
    </div>
  );
}

export default App;

