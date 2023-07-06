import "./App.css";
import SearchBar from "./components/SearchBar";
import { Logo } from "./components/Logo";
import { PersonList } from "./components/PersonList";
import Person from "./components/ClassCompEx/Person";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const warning = true;
  
  // let bgClass = '';

  // if(warning){
  //   bgClass = 'warning'
  // }else{
  //   bgClass = 'dark'
  // }
 
  return (
    <div className={`App ${ warning ? 'warning' : 'dark'}`}>
      {/* <Logo/> */}
      {/* <SearchBar></SearchBar> */}
      {/* <SearchBar /> */}
      {/* <PersonList/> */}
      {/* <Person/> */}
      {/* <Footer/> */}
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;

// 'App dark'
