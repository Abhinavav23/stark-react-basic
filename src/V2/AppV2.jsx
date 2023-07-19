import { Header } from "./components/composition/Header";
import "./AppV2.css";
import { Footer } from "./components/helpAndFeedback/Footer";
import { Feedback } from "./components/helpAndFeedback/Feedback";
import { Name } from "./components/states/Name";
import { UserInfo } from "./components/states/UserInfo";
import { Counter } from "./components/states/Counter";
import { PrevState } from "./components/states/PrevState";
import { AsyncStateEx } from "./components/states/AsyncStateEx";
import { LoginForm } from "./components/form/LoginForm";
import { SignUp } from "./components/form/SignUp";
import { GetUSerInfo } from "./components/form/GetUserInfo";
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

      {/* <Header  device={"mobile"} logoDesign={"circular"}/> */}
      {/* <Footer/> */}
      {/* <Feedback/> */}
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

      {/* <Name/> */}
      {/* <UserInfo/> */}
      {/* <Counter/> */}
      {/* <PrevState/> */}
      {/* <AsyncStateEx/> */}

      {/* forms */}

      {/* <LoginForm/> */}
      {/* <SignUp/> */}
      
      <GetUSerInfo/>
    </main>
  );
};
