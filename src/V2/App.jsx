import {ProductList} from './components/ProductList'
import { ConditionalEX2 } from './components/conditionals/ConditionalEX2';
import { UserStatus } from './components/conditionals/UserStatus';
export const App = () => {
  return (
    <>
      <h3>Stark App V2</h3>
      <UserStatus/>
      <ProductList/>
      <ConditionalEX2/>
    </>
  );
};
